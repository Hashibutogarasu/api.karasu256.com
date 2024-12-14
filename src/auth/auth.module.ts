import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserController } from 'src/user/user.controller';
import { AuthService } from './auth.service';
import { GoogleModule } from './google/google.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [GoogleModule],
  controllers: [AuthController, UserController],
  providers: [AuthService, UserService],
})
export class AuthModule {

}
