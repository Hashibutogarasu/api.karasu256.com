import { Module } from '@nestjs/common';
import { AdminAuthController } from './admin_auth.controller';
import { AdminAuthService } from './admin_auth.service';

@Module({
  imports: [],
  controllers: [AdminAuthController],
  providers: [AdminAuthService]
})
export class AdminAuthModule { }
