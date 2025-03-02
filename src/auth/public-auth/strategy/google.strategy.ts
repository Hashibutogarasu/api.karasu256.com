import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { auth } from 'firebase-admin';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    configService: ConfigService,
  ) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: `${configService.get('GOOGLE_CALLBACK_URL')}?callbackUrl=${configService.get('ACCOUNT_FRONT_URL')}`,
      scope: ['email', 'profile'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {

    const { emails } = profile;

    const user = await auth().getUserByEmail(emails[0].value);

    if(!user) {
      throw new HttpException('User not found', 404);
    }

    done(null, user);
  }
}