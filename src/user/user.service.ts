import { Inject, Injectable } from "@nestjs/common";
import { SupabaseClient, User } from "@supabase/supabase-js";
import {
  CreateUserDto,
  CreateUsersPublicProfileDto,
  UpdateUserDto,
  UpdateUsersPublicProfileDto,
  UserExistsDto,
} from "@/user/user.dto";
import { UsersPublicProfileEntity, UsersEntity } from "@/entities/user.entity";
import { MessageDto } from "@/user/user.controller";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
  constructor(
    @Inject("SUPABASE_CLIENT") private readonly supabase: SupabaseClient,
    @InjectRepository(UsersEntity) private readonly usersRepository: Repository<UsersEntity>,
    @InjectRepository(UsersPublicProfileEntity)
    private readonly userPublicProfileRepository: Repository<UsersPublicProfileEntity>,
  ) {}

  async getUser(id: string): Promise<User> {
    const { data: users, error } = await this.supabase.from("users").select().eq("id", id);

    if (error) {
      throw error;
    }

    return users[0];
  }

  async createUser({
    avatarUrl,
    bio,
    displayName,
    email,
    emailIsPublic,
    name,
  }: CreateUserDto): Promise<MessageDto> {
    const user = await this.userPublicProfileRepository.findOne({ where: { displayName } });

    if (user) {
      return {
        message: `The user with display name ${displayName} already exists. Please use a different display name.`,
      };
    }

    try {
      await this.usersRepository.save({
        avatarUrl,
        bio,
        displayName,
        email,
        emailIsPublic,
        name,
      });
    } catch (e) {
      return {
        message: e.message,
      };
    }

    return {
      message: "User created successfully",
    };
  }

  async getProfile(displayName: string): Promise<UsersPublicProfileEntity | MessageDto> {
    const user = await this.userPublicProfileRepository.findOne({
      where: {
        displayName: displayName,
      },
    });

    if (!user) {
      return {
        message: "User not found",
      };
    }

    return user;
  }

  async userExists({ id }: UserExistsDto): Promise<{ exists: boolean }> {
    const user = await this.usersRepository.findOne({ where: { id } });

    return {
      exists: !!user,
    };
  }

  async updateUser(user: UsersEntity, dto: UpdateUserDto): Promise<UsersEntity> {
    const { avatarUrl, bio, displayName, emailIsPublic, name } = dto;

    return await this.usersRepository.save({
      ...user,
      avatarUrl,
      bio,
      displayName,
      emailIsPublic,
      name,
    });
  }
}
