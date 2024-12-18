import { Module } from "@nestjs/common";
import { PostService } from "@/post/post.service";
import { PostController } from "@/post/post.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsEntity } from "@/entities/post.entity";
import { UsersEntity } from "@/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, PostsEntity])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
