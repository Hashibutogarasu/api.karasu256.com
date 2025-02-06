import { Authorization, CognitoUser, PublicRoute } from '@nestjs-cognito/auth';
import { Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';

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

  @PublicRoute()
  @Post("sign-in")
  async signin() {
    return this.authService.signin();
  }

  @PublicRoute()
  @Post("sign-up")
  async signup() {
    return this.authService.signup();
  }

  @ApiBearerAuth()
  @Post("sign-in/confirm")
  async signinConfirm() {
    return this.authService.signinConfirm();
  }

  @ApiBearerAuth()
  @Post("forgot-password")
  async forgotPassword() {
    return this.authService.forgotPassword();
  }

  @ApiBearerAuth()
  @Post("forgot-password/confirm")
  async forgotPasswordConfirm() {
    return this.authService.forgotPasswordConfirm();
  }

  @ApiBearerAuth()
  @Post("change-password")
  async changePassword() {
    return this.authService.changePassword();
  }

  @ApiBearerAuth()
  @Post("refresh-token")
  async refreshToken() {
    return this.authService.refreshToken();
  }
}
