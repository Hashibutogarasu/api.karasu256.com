import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserController } from 'src/user/user.controller';
import { AuthService } from './auth.service';
import { GoogleModule } from './google/google.module';

@Module({
  imports: [GoogleModule],
  controllers: [AuthController, UserController],
  providers: [AuthService],
})
export class AuthModule {

}
