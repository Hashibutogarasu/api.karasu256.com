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
import { UserService } from "./user.service";
import {
  CreateUserDto,
  GetUserDto,
  UpdateUserDto,
  UserExistsDto,
  UserExistsResponseDto,
} from "./user.dto";
import { UsersEntity } from "./user.entity";

export class MessageDto {
  @ApiProperty()
  message: string;
}

@ApiBearerAuth()
@ApiExtraModels(UsersEntity, UserExistsDto, UserExistsResponseDto, MessageDto)
@Controller("user")
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({
    description: "User successfully retrieved",
    type: Object,
  })
  @Get()
  async getUser(@Req() req) {
    return req.user;
  }

  @ApiOkResponse({
    description: "User profile successfully retrieved",
  })
  @ApiBody({
    description: "User profile",
    type: GetUserDto,
  })
  @ApiResponse({
    status: 400,
    description: "User not found",
  })
  @Get("profile")
  async getProfile(@Body() { displayName }: GetUserDto): Promise<UsersEntity | MessageDto> {
    return this.userService.getProfile(displayName);
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
  @Post("create")
  async createUser(
    @Body() { avatarUrl, bio, displayName, email, emailIsPublic, name }: CreateUserDto,
  ) {
    return this.userService.createUser({
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
  @Post("exists")
  async userExists(@Body() { id }: UserExistsDto): Promise<UserExistsResponseDto> {
    return this.userService.userExists({
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
  @Post("update")
  async updateUser(
    @Body() { avatarUrl, bio, displayName, email, emailIsPublic, name }: UpdateUserDto,
  ) {
    return this.userService.updateUser({
      avatarUrl,
      bio,
      displayName,
      email,
      emailIsPublic,
      name,
    });
  }
}
