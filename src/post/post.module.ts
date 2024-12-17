import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsEntity } from "./post.entity";
import { UsersEntity } from "user/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, PostsEntity])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
