import { UsersEntity, UsersPublicProfileEntity } from "@/entities/user.entity";
import { HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUsersPublicProfileDto, UpdateUsersPublicProfileDto } from "../user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,

    @InjectRepository(UsersPublicProfileEntity)
    private readonly userPublicProfileRepository: Repository<UsersPublicProfileEntity>,
  ) {}

  async getPublicUserProfile(user: UsersEntity): Promise<UsersPublicProfileEntity> {
    let data: UsersPublicProfileEntity;

    try {
      data = await this.userPublicProfileRepository.findOne({
        where: {
          id: user.supabaseId,
        },
      });
    } catch (e) {}

    if (!data) {
      throw new HttpException("User profile not found", 404);
    }

    return data;
  }

  async createUserProfile(
    user: UsersEntity,
    dto: CreateUsersPublicProfileDto,
  ): Promise<UsersPublicProfileEntity> {
    const { name, displayName, bio, avatarUrl } = dto;

    const userProfile = await this.userPublicProfileRepository.findOne({
      where: {
        displayName: displayName,
      },
    });

    if (userProfile) {
      throw new HttpException(`Display name of ${displayName} is already taken.`, 201);
    }

    return await this.userPublicProfileRepository.save({
      name,
      displayName,
      bio,
      avatarUrl,
      user: user,
    });
  }

  async updatePublicUserProfile(
    user: UsersEntity,
    dto: UpdateUsersPublicProfileDto,
  ): Promise<UsersPublicProfileEntity> {
    const userProfile = await this.userPublicProfileRepository.findOne({
      relations: {
        user: true,
      },
      where: {
        displayName: dto.displayName,
      },
    });

    if (userProfile) {
      if (user.supabaseId !== userProfile.user.supabaseId) {
        throw new UnauthorizedException("You can not modify this profile.");
      }

      const { name, displayName, bio, avatarUrl } = dto;
      return await this.userPublicProfileRepository.save({
        avatarUrl,
        bio,
        displayName,
        name,
        user: user,
      });
    } else {
      throw new HttpException("User not found", 404);
    }
  }
}
