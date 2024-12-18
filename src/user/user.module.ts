import { Module } from "@nestjs/common";
import { UserService } from "@/user/user.service";
import { UserController } from "@/user/user.controller";
import { AuthController } from "@/auth/auth.controller";
import { AuthService } from "auth/auth.service";
import { UsersEntity } from "@/entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService],
})
export class UserModule {}
