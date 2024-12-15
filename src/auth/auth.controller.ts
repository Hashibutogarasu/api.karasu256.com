import { Controller, Post, Body, Get, Query, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import {
  ApiBody,
  ApiExtraModels,
  ApiOkResponse,
  ApiParam,
  ApiProperty,
  ApiQuery,
  ApiResponse,
} from "@nestjs/swagger";
import { AccessTokenDto, SignInWithOtpDto } from "./auth.dto";
import { MessageDto } from "../user/user.controller";

@ApiExtraModels(AccessTokenDto, MessageDto, SignInWithOtpDto)
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({
    schema: {
      type: "object",
      properties: {
        email: {
          type: "string",
          example: "example@example.com",
          default: "{{email}}",
        },
        password: {
          type: "string",
          description: "Password must be at least 6 characters long",
          example: "password",
          default: "{{password}}",
        },
      },
    },
  })
  @ApiOkResponse({
    description: "User successfully signed up",
    type: Object,
  })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @Post("signup")
  async signUp(@Body("email") email: string, @Body("password") password: string): Promise<Object> {
    const user = await this.authService.signUp(email, password);
    return user;
  }

  @ApiBody({
    schema: {
      type: "object",
      properties: {
        email: {
          type: "string",
          example: "example@example.com",
          default: "{{email}}",
        },
        password: {
          type: "string",
          example: "password",
          default: "{{password}}",
        },
      },
    },
  })
  @ApiOkResponse({
    description: "User successfully signed in",
    type: AccessTokenDto,
  })
  @ApiResponse({
    status: 201,
    example: {
      accessToken: "Bearer token",
    },
    description: "User successfully signed in",
  })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @Post("signin")
  async signIn(
    @Body("email") email: string,
    @Body("password") password: string,
  ): Promise<AccessTokenDto> {
    const token = await this.authService.signIn(email, password);
    return {
      accessToken: token,
    };
  }

  @ApiOkResponse({
    description: "User successfully signin with Google",
    type: AccessTokenDto,
  })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        email: {
          type: "string",
          example: "example@example.com",
          default: "{{email}}",
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: "OTP sent",
    example: {
      message: "OTP sent to email. Check your email box.",
    },
  })
  @Post("signin/passwordless")
  async googlePasswordless(@Body("email") email: string): Promise<MessageDto> {
    return this.authService.signInWithOtp({
      email: email,
      redirectTo: `${process.env.BASE_URL}/auth/callback?`,
    });
  }

  @ApiParam({
    name: "hash",
    type: "string",
    required: true,
    description: "Token hash",
  })
  @ApiOkResponse({
    description: "User successfully signed in",
    type: SignInWithOtpDto,
  })
  @ApiResponse({
    status: 200,
    description: "User successfully signed in",
    example: {
      message: "Successfully logged in",
      token: "Bearer token",
    },
  })
  @Get("otp")
  async signInWithOTP(@Query("hash") tokenhash): Promise<SignInWithOtpDto> {
    const data = await this.authService.verifyOTPhash({ tokenhash });
    if (data) {
      return {
        message: "Successfully logged in",
        token: data,
      };
    }

    return {
      token: null,
      message: "Failed to log in",
    };
  }

  @ApiBody({
    schema: {
      type: "object",
      properties: {
        email: {
          type: "string",
          example: "example@example.com",
          default: "{{email}}",
        },
      },
    },
  })
  @ApiQuery({
    name: "code",
    type: "string",
    required: true,
    description: "OTP code",
  })
  @ApiOkResponse({
    description: "User successfully signed in",
    type: SignInWithOtpDto,
  })
  @ApiResponse({
    status: 200,
    description: "User successfully signed in",
  })
  @ApiResponse({
    status: 401,
    description: "Unauthorized",
  })
  @Post("otp")
  async verifyOTP(@Body("email") email, @Query("code") code): Promise<SignInWithOtpDto> {
    const data = await this.authService.verifyOTP({ email, token: code });
    if (data) {
      return {
        message: "Successfully logged in",
        token: data,
      };
    }

    throw new UnauthorizedException("Failed to log in");
  }
}
