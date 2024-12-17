import { Body, Controller, Delete, Get, Post, Query, Req, UseGuards } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostsEntity } from "./post.entity";
import {
  CreatePostDto,
  DeletePostDto,
  GetAllPostsDto,
  GetPostDto,
  UpdatePostDto,
} from "./post.dto";
import { MessageDto } from "../user/user.controller";
import { UserGuard } from "../user/user.guard";

@Controller("posts")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @UseGuards(UserGuard)
  @Post("create")
  async createPost(@Req() req, @Body() dto: CreatePostDto): Promise<PostsEntity> {
    return await this.postService.createPost(req.user, dto);
  }

  @UseGuards(UserGuard)
  @Post("update")
  async updatePost(@Req() req, @Body() dto: UpdatePostDto): Promise<PostsEntity> {
    return await this.postService.updatePost(req.user, dto);
  }

  @UseGuards(UserGuard)
  @Delete("delete")
  async deletePost(@Req() req, @Body() dto: DeletePostDto): Promise<MessageDto> {
    return await this.postService.deletePost(req.user, dto);
  }

  @Get("get")
  async getPost(@Query() dto: GetPostDto): Promise<PostsEntity> {
    return await this.postService.getPost(dto);
  }

  @Get("get-all")
  async getAllPosts(@Query() dto: GetAllPostsDto): Promise<PostsEntity[]> {
    return await this.postService.getAllPosts(dto);
  }
}
