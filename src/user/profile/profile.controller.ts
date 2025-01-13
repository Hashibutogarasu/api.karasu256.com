import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { CreateUsersPublicProfileDto, UpdateUsersPublicProfileDto } from "../../user/user.dto";
import { UsersPublicProfileEntity } from "@/entities/user.entity";
import { UserGuard } from "../../user/user.guard";
import { ProfileService } from "../../user/profile/profile.service";

@Controller("users/profile")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @UseGuards(UserGuard)
  async getProfile(@Req() req): Promise<UsersPublicProfileEntity> {
    return this.profileService.getPublicUserProfile(req.user);
  }

  @Post("create")
  @UseGuards(UserGuard)
  async createProfile(
    @Req() req,
    @Body() dto: CreateUsersPublicProfileDto,
  ): Promise<UsersPublicProfileEntity> {
    return await this.profileService.createUserProfile(req.user, dto);
  }

  @Post("update")
  @UseGuards(UserGuard)
  async updateProfile(
    @Req() req,
    @Body() dto: UpdateUsersPublicProfileDto,
  ): Promise<UsersPublicProfileEntity> {
    return await this.profileService.updatePublicUserProfile(req.user, dto);
  }
}
