import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CognitoUserAttribute, CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoRefreshToken, ChallengeName, CognitoUserSession } from 'amazon-cognito-identity-js';

import {
  ChangePasswordDto,
  ForgotPasswordConfirmDto,
  ForgotPasswordDto,
  RefreshTokenDto,
  SignInDto,
  SignUpConfirmDto,
  SignupDto,
  GetRefreshTokenDto,
  EnableMfaDto,
  SetUpMfaDto,
  DisableMfaDto
} from './admin_auth.dto';

@Injectable()
export class AdminAuthService {
  private userPool: CognitoUserPool;

  constructor(
    private configService: ConfigService,
  ) {
    this.userPool = new CognitoUserPool({
      UserPoolId: this.configService.get<string>('COGNITO_USER_POOL_ID'),
      ClientId: this.configService.get<string>('COGNITO_CLIENT_ID'),
    });
  }

  getUser(email: string) {
    return new CognitoUser({
      Username: email,
      Pool: this.userPool,
    });
  }

  getAuthenticationDetails(email: string, password: string) {
    return new AuthenticationDetails({
      Username: email,
      Password: password,
    });
  }

  onSignIn(session: CognitoUserSession): Promise<any> {
    return new Promise((resolve, reject) => {
      const accessToken = session.getAccessToken().getJwtToken();
      resolve({ accessToken });
    })
  }

  onChangePassword(user: CognitoUser, dto: ChangePasswordDto) {
    return new Promise((resolve, reject) => {
      user.changePassword(dto.oldPassword, dto.newPassword, (err, result) => {
        if (err) {
          return resolve(this.onError(err));
        }
        resolve({ message: 'Password changed' });
      });
    })
  }

  onError(error: any) {
    return new Promise((resolve, reject) => {
      resolve({
        message: error
      })
    });
  }

  async signin(dto: SignInDto) {
    const user = this.getUser(dto.email);

    return new Promise((resolve, reject) => {
      user.authenticateUser(this.getAuthenticationDetails(dto.email, dto.password), {
        totpRequired: (challengeName, challengeParameters) => {
          user.sendMFACode(dto.code, ({
            onSuccess: (result) => {
              this.onSignIn(result);
            },
            onFailure: (err) => {
              reject(err);
            },
          }), challengeName)
        },
        onSuccess: (result) => {
          resolve(this.onSignIn(result));
        },
        onFailure: (err) => {
          resolve(this.onError(err));
        },
      });
    });
  }

  async setUpMfa(dto: SetUpMfaDto) {
    const user = this.getUser(dto.email);

    return new Promise((resolve, reject) => {
      user.authenticateUser(this.getAuthenticationDetails(dto.email, dto.password), {
        onSuccess: (result) => {
          user.associateSoftwareToken({
            associateSecretCode: (secretCode) => {
              resolve({
                message: 'MFA setup',
                secretCode: secretCode,
                totpUrl: `otpauth://totp/KarasuLab:${dto.email}?secret=${secretCode}&issuer=KarasuLab`,
              });
            },
            onFailure: (err) => {
              resolve(this.onError(err));
            },
          });
        },
        onFailure: (err) => {
          resolve(this.onError(err));
        }
      });
    });
  }

  async enableMfa(dto: EnableMfaDto) {
    const user = this.getUser(dto.email);

    return new Promise((resolve, reject) => {
      user.authenticateUser(this.getAuthenticationDetails(dto.email, dto.password), {
        onSuccess: (result) => {
          user.verifySoftwareToken(dto.code, dto.deviceName, {
            onSuccess: (result) => {
              user.setUserMfaPreference({
                Enabled: dto.answerChallenge == "SMS_MFA",
                PreferredMfa: dto.answerChallenge == "SMS_MFA",
              }, {
                Enabled: dto.answerChallenge == "SOFTWARE_TOKEN_MFA",
                PreferredMfa: dto.answerChallenge == "SOFTWARE_TOKEN_MFA",
              }, (err, result) => {
                if (err) {
                  return resolve(this.onError(err));
                }
                resolve({ message: 'MFA enabled' });
              });
            },
            onFailure: (err) => {
              resolve(this.onError(err));
            },
          });
        },
        onFailure: (err) => {
          resolve(this.onError(err));
        }
      });
    });
  }

  async disableMfa(dto: DisableMfaDto) {
    const user = this.getUser(dto.email);

    return new Promise((resolve, reject) => {
      user.authenticateUser(this.getAuthenticationDetails(dto.email, dto.password), {
        totpRequired: (challengeName, challengeParameters) => {
          user.sendMFACode(dto.code, ({
            onSuccess: (result) => {
              user.setUserMfaPreference({
                Enabled: false,
                PreferredMfa: false,
              }, {
                Enabled: false,
                PreferredMfa: false,
              }, (err, result) => {
                if (err) {
                  return resolve(this.onError(err));
                }
                resolve({ message: 'MFA disabled' });
              });
            },
            onFailure: (err) => {
              resolve(this.onError(err));
            },
          }), challengeName)
        },
        onSuccess: (result) => {
          user.disableMFA((err, result) => {
            if (err) {
              return resolve(this.onError(err));
            }
            resolve({ message: 'MFA disabled' });
          });
        },
        onFailure: (err) => {
          resolve(this.onError(err));
        },
      });
    });
  }

  async signup(dto: SignupDto) {
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: dto.email,
      }),
      new CognitoUserAttribute({
        Name: 'nickname',
        Value: dto.nickname,
      }),
    ];

    return new Promise((resolve, reject) => {
      this.userPool.signUp(dto.email, dto.password, attributeList, [], (err, result) => {
        if (err) {
          return resolve(this.onError(err));
        }
        resolve({ message: 'User created' });
      });
    });
  }

  async signinConfirm(dto: SignUpConfirmDto) {
    const user = this.getUser(dto.email);

    return new Promise((resolve, reject) => {
      user.confirmRegistration(dto.code, true, (err, result) => {
        if (err) {
          return resolve(this.onError(err));
        }
        resolve({ message: 'User confirmed' });
      });
    });
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = this.getUser(dto.email);

    return new Promise((resolve, reject) => {
      user.forgotPassword({
        onSuccess: (result) => {
          resolve({ message: 'Password reseted' });
        },
        onFailure: (err) => {
          resolve(this.onError(err));
        },
      });
    });
  }

  async forgotPasswordConfirm(dto: ForgotPasswordConfirmDto) {
    const user = this.getUser(dto.email);

    return new Promise((resolve, reject) => {
      user.confirmPassword(dto.code, dto.password, {
        onSuccess: (result) => {
          resolve({ message: 'Password changed' });
        },
        onFailure: (err) => {
          resolve(this.onError(err));
        },
      });
    });
  }

  async changePassword(dto: ChangePasswordDto) {
    const user = this.getUser(dto.email);

    return new Promise((resolve, reject) => {
      user.authenticateUser(this.getAuthenticationDetails(dto.email, dto.oldPassword), {
        totpRequired: (challengename, challengeParameters) => {
          user.sendMFACode(dto.code, ({
            onSuccess: (result) => {
              resolve(this.onChangePassword(user, dto));
            },
            onFailure: (err) => {
              resolve(this.onError(err));
            },
          }), challengename);
        },
        onSuccess: (session) => {
          resolve(this.onChangePassword(user, dto));
        },
        onFailure: (err) => {
          resolve(this.onError(err));
        }
      })
    });
  }

  async getRefreshToken(dto: GetRefreshTokenDto) {
    const user = this.getUser(dto.email);

    return new Promise((resolve, reject) => {
      user.authenticateUser(this.getAuthenticationDetails(dto.email, dto.password), {
        onSuccess: (result) => {
          const refreshToken = result.getRefreshToken().getToken();
          resolve({ refreshToken });
        },
        onFailure: (err) => {
          resolve(this.onError(err));
        },
      });
    });
  }

  async refreshToken(dto: RefreshTokenDto) {
    const user = this.getUser(dto.email);
    const refreshToken = new CognitoRefreshToken({ RefreshToken: dto.refreshToken });

    return new Promise((resolve, reject) => {
      user.refreshSession(refreshToken, (err, session) => {
        if (err) {
          return resolve(this.onError(err));
        }
        const accessToken = session.getAccessToken().getJwtToken();
        resolve({ accessToken });
      });
    });
  }
}