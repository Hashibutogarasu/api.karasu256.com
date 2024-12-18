import { Module } from "@nestjs/common";
import { AuthController } from "@/auth/auth.controller";
import { UserController } from "@/user/user.controller";
import { AuthService } from "@/auth/auth.service";
import { GoogleModule } from "@/auth/google/google.module";
import { UserService } from "@/user/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "@/entities/user.entity";

@Module({
  imports: [GoogleModule, TypeOrmModule.forFeature([UsersEntity])],
  controllers: [AuthController, UserController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
