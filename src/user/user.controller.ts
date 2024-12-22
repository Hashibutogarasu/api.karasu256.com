import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiBody,
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  ApiResponse,
} from "@nestjs/swagger";
import { AuthGuard } from "@/auth/auth.guard";
import { UserService } from "@/user/user.service";
import {
  CreateUserDto,
  CreateUsersPublicProfileDto,
  GetUserDto,
  UpdateUserDto,
  UpdateUsersPublicProfileDto,
  UserExistsDto,
  UserExistsResponseDto,
} from "@/user/user.dto";
import { UsersPublicProfileEntity, UsersEntity } from "@/entities/user.entity";
import { UserGuard } from "./user.guard";

export class MessageDto {
  @ApiProperty()
  message: string;
}

export class MessageWithUserDto extends MessageDto {
  @ApiProperty()
  user: UsersEntity;
}

@ApiBearerAuth()
@ApiExtraModels(UsersEntity, UserExistsDto, UserExistsResponseDto, MessageDto)
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({
    description: "User successfully retrieved",
    type: Object,
  })
  @Get()
  @UseGuards(AuthGuard)
  async getUser(@Req() req) {
    return req.user;
  }

  @ApiOkResponse({
    description: "User created successfully",
    type: MessageDto,
  })
  @ApiBody({
    description: "User profile",
    type: CreateUserDto,
  })
  @ApiResponse({
    status: 400,
    description: "The user with display name already exists. Please use a different display name.",
  })
  @UseGuards(AuthGuard)
  @Post("create")
  async createUser(
    @Req() req,
    @Body() { avatarUrl, bio, displayName, email, emailIsPublic, name }: CreateUserDto,
  ): Promise<MessageDto> {
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

  @ApiOkResponse({
    description: "User exists",
    type: UserExistsResponseDto,
  })
  @ApiBody({
    description: "User exists",
    type: UserExistsDto,
  })
  @UseGuards(AuthGuard)
  @Post("exists")
  async userExists(@Body() { id }: UserExistsDto): Promise<UserExistsResponseDto> {
    return await this.userService.userExists({
      id,
    });
  }

  @ApiOkResponse({
    description: "User updated successfully",
    type: MessageDto,
  })
  @ApiBody({
    description: "User profile",
    type: UpdateUserDto,
  })
  @UseGuards(UserGuard)
  @Post("update")
  async updateUser(@Req() req, @Body() dto: UpdateUserDto): Promise<UsersEntity> {
    return await this.userService.updateUser(req.user, dto);
  }
}
