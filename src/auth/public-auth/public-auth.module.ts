import { Module } from '@nestjs/common';
import { PublicAuthController } from './public-auth.controller';
import { PublicAuthService } from './public-auth.service';

@Module({
  controllers: [PublicAuthController],
  providers: [PublicAuthService]
})
export class PublicAuthModule {}
