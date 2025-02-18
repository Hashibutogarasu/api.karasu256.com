import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import admin from 'firebase-admin';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(Strategy, 'firebase-auth') {
  constructor() {
    super();
  }

  async validate(token: string): Promise<UserRecord> {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);

      const user = await admin.auth().getUser(decodedToken.uid);

      return user;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}