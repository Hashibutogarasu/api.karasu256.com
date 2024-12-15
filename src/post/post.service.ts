import { Inject, Injectable } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";
import { CreatePostDto, UpdatePostDto } from "./post.dto";
import { PostsEntity } from "./post.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UsersEntity } from "../user/user.entity";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostsEntity)
    private readonly postsRepository: Repository<PostsEntity>,
  ) {}

  async createPost(user: UsersEntity, dto: CreatePostDto): Promise<PostsEntity> {
    const post = new PostsEntity();
    post.title = dto.title;
    post.content = dto.content;

    return this.postsRepository.save(post);
  }

  async updatePost(user: UsersEntity, dto: UpdatePostDto): Promise<PostsEntity> {
    const post = new PostsEntity();
    post.title = dto.title;
    post.content = dto.content;

    return this.postsRepository.save({ ...user, ...dto });
  }
}
