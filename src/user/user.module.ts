import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
    imports: [],
    controllers: [UserController, AuthController],
    providers: [UserService, AuthService],
})
export class UserModule { }
