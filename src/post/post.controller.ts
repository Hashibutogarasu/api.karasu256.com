import { Body, Controller, Delete, Get, Post, Query, Req, UseGuards } from "@nestjs/common";
import { PostService } from "@/post/post.service";
import { PostsEntity } from "@/entities/post.entity";
import {
  CreatePostDto,
  CreatePostDtoSchema,
  DeletePostDto,
  DeletePostDtoSchema,
  GetAllPostsDto,
  GetPostDto,
  UpdatePostDto,
  UpdatePostDtoSchema,
} from "./post.dto";
import { UserGuard } from "@/user/user.guard";
import { ApiBody, ApiQuery, getSchemaPath } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";

@Controller("posts")
export class PostController {
  constructor(private readonly postService: PostService) { }

  @ApiBody({
    schema: zodToOpenAPI(CreatePostDtoSchema),
  })
  @UseGuards(UserGuard)
  @Post("create")
  async createPost(@Req() req, @Body() dto: CreatePostDto): Promise<PostsEntity> {
    return await this.postService.createPost(req.user, dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(UpdatePostDtoSchema),
  })
  @UseGuards(UserGuard)
  @Post("update")
  async updatePost(@Req() req, @Body() dto: UpdatePostDto): Promise<PostsEntity> {
    return await this.postService.updatePost(req.user, dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(DeletePostDtoSchema),
  })
  @UseGuards(UserGuard)
  @Delete("delete")
  async deletePost(@Req() req, @Body() dto: DeletePostDto) {
    return await this.postService.deletePost(req.user, dto);
  }

  @ApiQuery({
    required: false,
    name: 'queryParams',
    explode: true,
    type: 'object',
    schema: {
      $ref: getSchemaPath(GetPostDto),
    },
  })
  @Get("get")
  async getPost(@Query() dto: GetPostDto): Promise<PostsEntity> {
    return await this.postService.getPost(dto);
  }

  @ApiQuery({
    required: false,
    name: 'queryParams',
    explode: true,
    type: 'object',
    schema: {
      $ref: getSchemaPath(GetAllPostsDto),
    },
  })
  @Get("get-all")
  async getAllPosts(@Query() dto: GetAllPostsDto): Promise<PostsEntity[]> {
    return await this.postService.getAllPosts(dto);
  }
}
