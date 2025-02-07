import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CognitoUserAttribute, CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoRefreshToken } from 'amazon-cognito-identity-js';

import {
  ChangePasswordDto,
  ForgotPasswordConfirmDto,
  ForgotPasswordDto,
  RefreshTokenDto,
  SignInDto,
  SignInWithMfaDto,
  SignUpConfirmDto,
  SignupDto,
  GetRefreshTokenDto,
  EnableMfaDto
} from './auth.dto';

@Injectable()
export class AuthService {
  private userPool: CognitoUserPool;

  constructor(
    private configService: ConfigService,
  ) {
    this.userPool = new CognitoUserPool({
      UserPoolId: this.configService.get<string>('COGNITO_USER_POOL_ID'),
      ClientId: this.configService.get<string>('COGNITO_CLIENT_ID'),
    });
  }

  getUser({ email }) {
    return new CognitoUser({
      Username: email,
      Pool: this.userPool,
    });
  }

  async signin(dto: SignInDto) {
    const user = this.getUser({ email: dto.email });

    return new Promise((resolve, reject) => {
      user.authenticateUser(new AuthenticationDetails({
        Username: dto.email,
        Password: dto.password,
      }), {
        onSuccess: (result) => {
          const accessToken = result.getAccessToken().getJwtToken();
          resolve({ accessToken });
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }

  async setUpMfa(dto: SignInDto) {
    const user = this.getUser({ email: dto.email });

    return new Promise((resolve, reject) => {
      user.authenticateUser(new AuthenticationDetails({
        Username: dto.email,
        Password: dto.password,
      }), {
        onSuccess: (result) => {
          user.associateSoftwareToken({
            associateSecretCode: (secretCode) => {
              resolve({
                message: 'MFA setup',
                secretCode: secretCode,
              });
            },
            onFailure: (err) => {
              reject(err);
            },
          });
        },
        onFailure: (err) => {
          reject(err);
        }
      });
    });
  }

  async enableMfa(dto: EnableMfaDto) {
    const user = this.getUser({ email: dto.email });

    return new Promise((resolve, reject) => {
      user.authenticateUser(new AuthenticationDetails({
        Username: dto.email,
        Password: dto.password,
      }), {
        onSuccess: (result) => {
          user.verifySoftwareToken(dto.code, dto.deviceName, {
            onSuccess: (result) => {
              user.enableMFA((err, result) => {
                if (err) {
                  reject(err);
                  return;
                }
                resolve({ message: 'MFA enabled' });
              });
            },
            onFailure: (err) => {
              reject(err);
            },
          });
        },
        onFailure: (err) => {
          reject(err);
        }
      });
    });
  }

  async disableMfa(dto: SignInDto) {
    const user = this.getUser({ email: dto.email });

    return new Promise((resolve, reject) => {
      user.authenticateUser(new AuthenticationDetails({
        Username: dto.email,
        Password: dto.password,
      }), {
        onSuccess: (result) => {
          user.disableMFA((err, result) => {
            if (err) {
              reject(err);
              return;
            }
            resolve({ message: 'MFA disabled' });
          });
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }

  async signinWithMfa(dto: SignInWithMfaDto) {
    const user = this.getUser({ email: dto.email });

    return user.authenticateUser(new AuthenticationDetails({
      Username: dto.email,
      Password: dto.password,
    }), {
      onSuccess: (result) => {
        return new Promise((resolve, reject) => {
          user.sendMFACode(dto.code, {
            onSuccess: (result) => {
              const accessToken = result.getAccessToken().getJwtToken();
              resolve({ accessToken });
            },
            onFailure: (err) => {
              reject(err);
            },
          });
        });
      },
      onFailure: (err) => {
        return Promise.reject(err);
      }
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
          reject(err);
          return;
        }
        resolve({ message: 'User created' });
      });
    });
  }

  async signinConfirm(dto: SignUpConfirmDto) {
    const user = this.getUser({ email: dto.email });

    return new Promise((resolve, reject) => {
      user.confirmRegistration(dto.code, true, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({ message: 'User confirmed' });
      });
    });
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = this.getUser({ email: dto.email });

    return new Promise((resolve, reject) => {
      user.forgotPassword({
        onSuccess: (result) => {
          resolve({ message: 'Password reseted' });
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }

  async forgotPasswordConfirm(dto: ForgotPasswordConfirmDto) {
    const user = this.getUser({ email: dto.email });

    return new Promise((resolve, reject) => {
      user.confirmPassword(dto.code, dto.password, {
        onSuccess: (result) => {
          resolve({ message: 'Password changed' });
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }

  async changePassword(dto: ChangePasswordDto) {
    const currentUser = this.userPool.getCurrentUser();

    return new Promise((resolve, reject) => {
      currentUser.changePassword(dto.oldPassword, dto.newPassword, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({ message: 'Password changed' });
      });
    });
  }

  async getRefreshToken(dto: GetRefreshTokenDto) {
    const user = new CognitoUser({
      Username: dto.email,
      Pool: this.userPool,
    });

    const authenticationDetails = new AuthenticationDetails({
      Username: dto.email,
      Password: dto.password,
    });

    return new Promise((resolve, reject) => {
      user.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          const refreshToken = result.getRefreshToken().getToken();
          resolve({ refreshToken });
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }

  async refreshToken(dto: RefreshTokenDto) {
    const user = new CognitoUser({
      Username: dto.email,
      Pool: this.userPool,
    });

    const refreshToken = new CognitoRefreshToken({ RefreshToken: dto.refreshToken });

    return new Promise((resolve, reject) => {
      user.refreshSession(refreshToken, (err, session) => {
        if (err) {
          reject(err);
          return;
        }
        const accessToken = session.getAccessToken().getJwtToken();
        resolve({ accessToken });
      });
    });
  }
}