import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiBody,
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  ApiResponse,
} from "@nestjs/swagger";
import { AuthGuard } from "../auth/auth.guard";
import { UserService } from "../user/user.service";
import {
  CreateUserDto,
  CreateUsersPublicProfileDto,
  GetUserDto,
  GetUserDtoSchema,
  UpdateUserDto,
  UpdateUserDtoSchema,
  UpdateUsersPublicProfileDto,
  UserExistsDto,
  UserExistsDtoSchema,
  UserExistsResponseDto,
} from "../user/user.dto";
import { UsersPublicProfileEntity, UsersEntity } from "../entities/user.entity";
import { UserGuard } from "./user.guard";
import { zodToOpenAPI } from "nestjs-zod";

@ApiBearerAuth()
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getUser(@Req() req) {
    return req.user;
  }

  @ApiBody({
    schema: zodToOpenAPI(GetUserDtoSchema),
  })
  @UseGuards(AuthGuard)
  @Post("create")
  async createUser(
    @Req() req,
    @Body() { avatarUrl, bio, displayName, email, emailIsPublic, name }: CreateUserDto,
  ) {
    return await this.userService.createUser({
      user: req.user,
      avatarUrl,
      bio,
      displayName,
      email,
      emailIsPublic,
      name,
    });
  }

  @ApiBody({
    schema: zodToOpenAPI(UserExistsDtoSchema),
  })
  @UseGuards(AuthGuard)
  @Post("exists")
  async userExists(@Body() { id }: UserExistsDto): Promise<UserExistsResponseDto> {
    return await this.userService.userExists({
      id,
    });
  }

  @ApiBody({
    schema: zodToOpenAPI(UpdateUserDtoSchema),
  })
  @UseGuards(UserGuard)
  @Post("update")
  async updateUser(@Req() req, @Body() dto: UpdateUserDto): Promise<UsersEntity> {
    return await this.userService.updateUser(req.user, dto);
  }
}
