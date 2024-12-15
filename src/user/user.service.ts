import { Inject, Injectable } from "@nestjs/common";
import { SupabaseClient, User } from "@supabase/supabase-js";
import { CreateUserDto, UpdateUserDto, UserExistsDto } from "./user.dto";
import { UsersEntity } from "./user.entity";
import { MessageDto } from "./user.controller";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
  constructor(
    @Inject("SUPABASE_CLIENT") private readonly supabase: SupabaseClient,
    @InjectRepository(UsersEntity) private readonly usersRepository: Repository<UsersEntity>,
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
  }: CreateUserDto): Promise<{ message: string }> {
    const user = await this.usersRepository.findOne({ where: { displayName } });

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

  async getProfile(displayName: string): Promise<UsersEntity | MessageDto> {
    const user = await this.usersRepository.findOne({
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

  async updateUser({
    avatarUrl,
    bio,
    displayName,
    email,
    emailIsPublic,
    name,
  }: UpdateUserDto): Promise<{ message: string }> {
    const user = await this.usersRepository.findOne({ where: { displayName } });

    if (!user) {
      return {
        message: `The user with display name ${displayName} does not exist.`,
      };
    }

    try {
      await this.usersRepository.update(user.id, {
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
      message: "User updated successfully",
    };
  }
}
