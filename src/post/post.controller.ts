import { Body, Controller, Post } from "@nestjs/common";
import { PostService } from "./post.service";
import { ApiBody } from "@nestjs/swagger";
import { PostsEntity } from "./post.entity";
import { CreatePostDto, UpdatePostDto } from "./post.dto";
import { UsersEntity } from "../user/user.entity";

@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post("create")
  async createPost(@Body() user: UsersEntity, @Body() dto: CreatePostDto): Promise<PostsEntity> {
    return await this.postService.createPost(user, dto);
  }

  @Post("update")
  async updatePost(@Body() user: UsersEntity, @Body() dto: UpdatePostDto): Promise<PostsEntity> {
    return await this.postService.updatePost(user, dto);
  }
}
