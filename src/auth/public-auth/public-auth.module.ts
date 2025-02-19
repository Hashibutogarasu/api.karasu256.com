import { Module } from '@nestjs/common';
import { PublicAuthController } from './public-auth.controller';
import { PublicAuthService } from './public-auth.service';
import { PassportModule } from '@nestjs/passport';
import { FirebaseAuthStrategy } from '@/firebase/firebase-auth.strategy';

@Module({
  imports: [PassportModule],
  controllers: [PublicAuthController],
  providers: [PublicAuthService, FirebaseAuthStrategy],
})
export class PublicAuthModule {}
