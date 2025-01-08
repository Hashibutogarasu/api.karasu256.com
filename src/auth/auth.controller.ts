import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  UnauthorizedException,
  UseGuards,
  Req,
} from "@nestjs/common";
import { AuthService } from "@/auth/auth.service";
import {
  ApiBody,
  ApiExtraModels,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from "@nestjs/swagger";
import {
  AccessTokenDto,
  PasswordLessSignInDto,
  SignInDto,
  SignInOtpDto,
  SignInWithOtpDto,
  SignUpDto,
  VerifyOtpDto,
} from "./auth.dto";
import { MessageDto, MessageWithUserDto } from "../user/user.controller";
import { AuthGuard } from "./auth.guard";

@ApiExtraModels(
  MessageDto,
  SignInWithOtpDto,
  AccessTokenDto,
  SignUpDto,
  SignInDto,
  PasswordLessSignInDto,
  SignInOtpDto,
)
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
  async signUp(@Body() dto: SignUpDto): Promise<object> {
    const user = await this.authService.signUp(dto);
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
  async signIn(@Body() dto: SignInDto): Promise<AccessTokenDto> {
    const token = await this.authService.signIn(dto);
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
  async googlePasswordless(@Body() dto: PasswordLessSignInDto): Promise<MessageDto> {
    return this.authService.signInWithOtp(dto, `${process.env.BASE_URL}/auth/callback?`);
  }

  @UseGuards(AuthGuard)
  @Get("verify")
  async verify(@Req() req): Promise<MessageWithUserDto> {
    return {
      message: "Authorized",
      user: req.user,
    };
  }

  @Get("confirm")
  async confirm(@Query() dto: VerifyOtpDto) {
    return await this.authService.confirm(dto);
  }
}
