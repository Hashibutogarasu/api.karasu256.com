import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiExtraModels, ApiOkResponse, ApiResponse } from "@nestjs/swagger";
import { User } from "@supabase/supabase-js";
import { AuthGuard } from "src/auth/auth.guard";
import { UserService } from "./user.service";

export class UserPayload {
  user: User;
}

export class CreateUserPayload {
  display_name: string;
  prismaUserId: string;
  email: string;
  full_name: string;
  avatar_url: string;
}

@ApiBearerAuth()
@ApiExtraModels(UserPayload)
@Controller("user")
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) { }
  @ApiOkResponse({
    description: "User successfully retrieved",
    type: UserPayload,
  })
  @Get()
  async getUser(@Req() req) {
    return { user: req.user };
  }

  @ApiOkResponse({
    description: "User created successfully",
  })
  @ApiBody({
    type: CreateUserPayload,
  })
  @ApiResponse({
    status: 400,
    description: "The user with display name already exists. Please use a different display name.",
  })
  @Post("create")
  async createUser(@Body() display_name: string, @Body() prismaUserId: string, @Body() email: string, @Body() full_name: string, @Body() avatar_url: string) {
    return this.userService.createUser({
      display_name,
      prismaUserId,
      email,
      full_name,
      avatar_url,
    });
  }

  @ApiOkResponse({
    description: "User updated successfully",
  })
  @ApiBody({
    type: CreateUserPayload,
  })
  @Post("update")
  async updateUser(@Body() display_name: string, @Body() prismaUserId: string, @Body() email: string, @Body() full_name: string, @Body() avatar_url: string) {
    return this.userService.updateUser({
      display_name,
      prismaUserId,
      email,
      full_name,
      avatar_url,
    });
  }
}
