import { Authorization, CognitoUser, PublicRoute } from '@nestjs-cognito/auth';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { zodToOpenAPI } from 'nestjs-zod';

import {
  ChangePasswordDto,
  ForgotPasswordConfirmDto,
  ForgotPasswordDto,
  RefreshTokenDto,
  SignInDto,
  signInSchema,
  SignInWithMfaDto,
  signInWithMfaSchema,
  changePasswordSchema,
  forgotPasswordConfirmSchema,
  forgotPasswordSchema,
  refreshTokenSchema,
  signUpConfirmSchema,
  signupSchema,
  SignUpConfirmDto,
  SignupDto,
  GetRefreshTokenDto,
  getRefreshTokenSchema,
  EnableMfaDto,
  enableMfaSchema
} from './auth.dto';

@Authorization({})
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @ApiBearerAuth()
  @Get()
  async me(@CognitoUser() {
    groups,
    email,
    username,
  }: {
    groups: string[];
    email: string;
    username: string;
  }) {
    return {
      groups,
      email,
      username
    };
  }

  @ApiBody({
    schema: zodToOpenAPI(signInSchema),
  })
  @PublicRoute()
  @Post("sign-in")
  async signin(@Body() dto: SignInDto) {
    return this.authService.signin(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(signInSchema),
  })
  @Post("mfa/set-up")
  async setUpMfa(@Body() dto: SignInDto) {
    return this.authService.setUpMfa(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(enableMfaSchema),
  })
  @Post("mfa/enable")
  async enableMfa(@Body() dto: EnableMfaDto) {
    return this.authService.enableMfa(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(signInSchema),
  })
  @Post("mfa/disable")
  async disableMfa(@Body() dto: SignInDto) {
    return this.authService.disableMfa(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(signInWithMfaSchema),
  })
  @PublicRoute()
  @Post("sign-in/mfa")
  async signinWithMfa(@Body() dto: SignInWithMfaDto) {
    return this.authService.signinWithMfa(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(signupSchema),
  })
  @PublicRoute()
  @Post("sign-up")
  async signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(signUpConfirmSchema),
  })
  @ApiBearerAuth()
  @Post("sign-up/confirm")
  async signinConfirm(@Body() dto: SignUpConfirmDto) {
    return this.authService.signinConfirm(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(forgotPasswordSchema),
  })
  @ApiBearerAuth()
  @Post("forgot-password")
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(forgotPasswordConfirmSchema),
  })
  @ApiBearerAuth()
  @Post("forgot-password/confirm")
  async forgotPasswordConfirm(@Body() dto: ForgotPasswordConfirmDto) {
    return this.authService.forgotPasswordConfirm(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(changePasswordSchema),
  })
  @ApiBearerAuth()
  @Post("change-password")
  async changePassword(@Body() dto: ChangePasswordDto) {
    return this.authService.changePassword(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(getRefreshTokenSchema),
  })
  @ApiBearerAuth()
  @Post("get-refresh-token")
  async getRefreshToken(@Body() dto: GetRefreshTokenDto) {
    return this.authService.getRefreshToken(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(refreshTokenSchema),
  })
  @PublicRoute()
  @ApiBearerAuth()
  @Post("refresh-token")
  async refreshToken(@Body() dto: RefreshTokenDto) {
    return this.authService.refreshToken(dto);
  }
}
