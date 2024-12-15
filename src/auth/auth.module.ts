import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { UserController } from "user/user.controller";
import { AuthService } from "./auth.service";
import { GoogleModule } from "./google/google.module";
import { UserService } from "../user/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "../user/user.entity";

@Module({
  imports: [GoogleModule, TypeOrmModule.forFeature([UsersEntity])],
  controllers: [AuthController, UserController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
