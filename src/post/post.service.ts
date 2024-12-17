import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { User } from "@supabase/supabase-js";
import {
  CreatePostDto,
  DeletePostDto,
  GetAllPostsDto,
  GetPostDto,
  UpdatePostDto,
} from "./post.dto";
import { PostsEntity } from "./post.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UsersEntity } from "../user/user.entity";
import { MessageDto } from "../user/user.controller";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostsEntity)
    private readonly postsRepository: Repository<PostsEntity>,

    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async createPost(user: UsersEntity, dto: CreatePostDto): Promise<PostsEntity> {
    const post = new PostsEntity();
    post.userId = user.id;
    post.title = dto.title;
    post.content = dto.content;

    return this.postsRepository.save(post);
  }

  async updatePost(user: UsersEntity, dto: UpdatePostDto): Promise<PostsEntity> {
    const UsersEntity = await this.usersRepository.findOne({
      where: {
        supaseId: user.id,
      },
    });

    if (!UsersEntity) {
      throw new UnauthorizedException("User not found");
    }

    const post = new PostsEntity();

    if (dto.title) post.title = dto.title;
    if (dto.content) post.content = dto.content;

    post.id = dto.postId;

    if (UsersEntity.supaseId !== user.id) {
      throw new UnauthorizedException("User not authorized to update this post");
    }

    post.userId = UsersEntity.id;
    return await this.postsRepository.save(post);
  }

  async deletePost(user: UsersEntity, { id }: DeletePostDto): Promise<MessageDto> {
    const post = await this.postsRepository.findOne({
      where: {
        id,
      },
    });

    if (!post) {
      throw new HttpException("Post not found", HttpStatus.NOT_FOUND);
    }

    if (post.userId !== user.id) {
      throw new UnauthorizedException("User not authorized to delete this post");
    }

    await this.postsRepository.delete({ id });

    return { message: "Post deleted successfully" };
  }

  async getPost({ id }: GetPostDto): Promise<PostsEntity> {
    const post = await this.postsRepository.findOne({ where: { id } });

    if (!post) {
      throw new HttpException("Post not found", HttpStatus.NOT_FOUND);
    }

    return post;
  }

  async getAllPosts(dto: GetAllPostsDto): Promise<PostsEntity[]> {
    dto.page = dto.page || 0;
    dto.limit = dto.limit || 10;

    if (dto.limit > 100) {
      throw new HttpException(
        "Limit too high. You can only fetch 100 posts at a time",
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.postsRepository.find({
      skip: dto.page * dto.limit,
      take: dto.limit,
    });
  }
}
