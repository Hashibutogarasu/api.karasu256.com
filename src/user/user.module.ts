import { Module } from "@nestjs/common";
import { UserService } from "@/user/user.service";
import { UserController } from "@/user/user.controller";
import { AuthController } from "@/auth/auth.controller";
import { AuthService } from "auth/auth.service";
import { UsersPublicProfileEntity, UsersEntity } from "@/entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, UsersPublicProfileEntity])],
  controllers: [UserController, AuthController, ProfileController],
  providers: [UserService, AuthService, ProfileService],
})
export class UserModule {}
