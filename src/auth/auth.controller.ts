import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  UnauthorizedException,
  UseGuards,
  Req,
  UsePipes,
} from "@nestjs/common";
import { AuthService } from "@/auth/auth.service";
import {
  ApiBody,
  ApiExtraModels,
  ApiOkResponse,
  ApiParam,
  ApiProperty,
  ApiQuery,
  ApiResponse,
  getSchemaPath,
} from "@nestjs/swagger";
import {
  AccessTokenDto,
  PasswordLessSignInDto,
  PasswordLessSignInDtoSchema,
  SignInDto,
  SignInDtoSchema,
  SignInOtpDto,
  SignInWithOtpDto,
  SignUpDto,
  SignUpDtoSchema,
  VerifyOtpDto,
  VerifyOtpDtoSchema,
} from "./auth.dto";
import { AuthGuard } from "./auth.guard";
import { createZodDto, zodToOpenAPI } from "nestjs-zod";
import { ZodValidationPipe } from "@/pipe/zod_validation_pipe";
import { Type } from "class-transformer";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiBody({
    schema: zodToOpenAPI(SignUpDtoSchema),
  })
  @UsePipes(ZodValidationPipe)
  @Post("signup")
  async signUp(@Body() dto: SignUpDto): Promise<object> {
    const user = await this.authService.signUp(dto);
    return user;
  }

  @ApiBody({
    schema: zodToOpenAPI(SignInDtoSchema),
  })
  @UsePipes(ZodValidationPipe)
  @Post("signin")
  async signIn(@Body() dto: SignInDto): Promise<AccessTokenDto> {
    const token = await this.authService.signIn(dto);
    return {
      accessToken: token,
    };
  }

  @ApiBody({
    schema: zodToOpenAPI(PasswordLessSignInDtoSchema),
  })
  @UsePipes(ZodValidationPipe)
  @Post("signin/passwordless")
  async googlePasswordless(@Body() dto: PasswordLessSignInDto) {
    return this.authService.signInWithOtp(dto, `${process.env.BASE_URL}/auth/callback?`);
  }

  @ApiQuery({
    name: "token",
    required: true,
    type: String,
  })
  @UseGuards(AuthGuard)
  @Get("verify")
  async verify(@Req() req) {
    return {
      message: "Authorized",
      user: req.user,
    };
  }

  @Type(() => VerifyOtpDto, {
    discriminator: {
      property: "type",
      subTypes: [
        { value: VerifyOtpDto, name: "email" },
        { value: VerifyOtpDto, name: "phone" },
      ],
    }
  })
  @ApiQuery({
    name: "type",
    required: true,
    schema: zodToOpenAPI(VerifyOtpDtoSchema),
  })
  @UsePipes(ZodValidationPipe)
  @Get("confirm")
  async confirm(@Query() dto: VerifyOtpDto) {
    return await this.authService.confirm(dto);
  }
}
