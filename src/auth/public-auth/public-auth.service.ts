import { Injectable } from '@nestjs/common';
import { ActionQueryParamDto, SignInDto, SignInGoogleCallbackDto, SignUpDto } from './public-auth.dto';
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { auth } from 'firebase-admin';

@Injectable()
export class PublicAuthService {
  constructor(
    private configService: ConfigService,
  ) { }

  async signin(dto: SignInDto) {
    try {
      const auth = getAuth();
      const user = await signInWithEmailAndPassword(auth, dto.email, dto.password);

      const token = await user.user.getIdToken();

      return { accessToken: token };
    }
    catch (error) {
      return error;
    }
  }

  async signup(dto: SignUpDto) {
    try {
      const auth = getAuth();
      const user = await createUserWithEmailAndPassword(auth, dto.email, dto.password);

      const token = await user.user.getIdToken();

      return { accessToken: token };
    }
    catch (error) {
      return error;
    }
  }

  async googleCallback({ user }: { user: User }, res: Response) {
    const token = await auth().createCustomToken(user.uid);

    res.redirect(`${this.configService.get("ACCOUNT_FRONT_URL")}#/callback/google?token=${token}`);
  }

  async action(res: Response, dto: ActionQueryParamDto) {
    const mode = dto.mode;
    const auth = getAuth();

    switch (mode) {
      case "resetPassword":
        return await this.handleResetPassword(res, auth, dto.oobCode, dto.apiKey, dto.continueUrl, dto.lang);
      case "recoverEmail":
        return await this.handleRecoverEmail(res, auth, dto.oobCode, dto.apiKey, dto.lang);
      case "verifyEmail":
        return await this.handleVerifyEmail(res, auth, dto.oobCode, dto.apiKey, dto.continueUrl, dto.lang);
    }
  }

  async handleResetPassword(res: Response, auth: Auth, actionCode: string, apiKey: string, continueUrl: string, lang: string) {
    const redirectUrl = continueUrl || this.configService.get("ACCOUNT_FRONT_URL");
    const queryParams = `?oobCode=${actionCode}&apiKey=${apiKey}&lang=${lang}`;
    const url = `${redirectUrl}/reset-password${queryParams}`;

    res.redirect(url);
  }

  async handleRecoverEmail(res: Response, auth: Auth, actionCode: string, apiKey: string, lang: string) {
    const redirectUrl = this.configService.get("ACCOUNT_FRONT_URL");
    const queryParams = `?oobCode=${actionCode}&apiKey=${apiKey}&lang=${lang}`;
    const url = `${redirectUrl}/recover-email${queryParams}`;

    res.redirect(url);
  }

  async handleVerifyEmail(res: Response, auth: Auth, actionCode: string, apiKey: string, continueUrl: string, lang: string) {
    const redirectUrl = continueUrl || this.configService.get("ACCOUNT_FRONT_URL");
    const queryParams = `?oobCode=${actionCode}&apiKey=${apiKey}&lang=${lang}`;
    const url = `${redirectUrl}/verify-email${queryParams}`;

    res.redirect(url);
  }
}
