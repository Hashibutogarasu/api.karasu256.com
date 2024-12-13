import { Controller, Post, Body, Get, UseGuards, Req, Param, Query, UnauthorizedException, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'example@example.com',
          default: '{{email}}',
        },
        password: {
          type: 'string',
          description: 'Password must be at least 6 characters long',
          example: 'password',
          default: '{{password}}',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'User successfully signed up',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @Post('signup')
  async signUp(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.authService.signUp(email, password);
    return { user };
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'example@example.com',
          default: '{{email}}',
        },
        password: {
          type: 'string',
          example: 'password',
          default: '{{password}}',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'User successfully signed in',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @Post('signin')
  async signIn(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const token = await this.authService.signIn(email, password);
    return {
      accessToken: token,
    };
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'example@example.com',
          default: '{{email}}',
        },
      },
    },
  })
  @Post('signin/passwordless')
  async googlePasswordless(@Body('email') email: string) {
    return this.authService.signInWithOtp({
      email: email,
      redirectTo: `${process.env.BASE_URL}/auth/callback?`,
    });
  }

  @ApiParam({
    name: 'hash',
    type: 'string',
    required: true,
    description: 'Token hash',
  })
  @Get('otp')
  async signInWithOTP(@Query('hash') tokenhash) {
    const data = await this.authService.verifyOTPhash({ tokenhash });
    if (data) {
      return {
        message: 'Successfully logged in',
        token: data
      };
    }

    return {
      message: 'Failed to log in',
    };
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'example@example.com',
          default: '{{email}}',
        },
      },
    },
  })
  @ApiQuery({
    name: 'code',
    type: 'string',
    required: true,
    description: 'OTP code',
  })
  @ApiResponse({
    status: 200,
    description: 'User successfully signed in',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @Post('otp')
  async verifyOTP(@Body('email') email, @Query('code') code) {
    const data = await this.authService.verifyOTP({ email, token: code });
    if (data) {
      return {
        message: 'Successfully logged in',
        token: data
      };
    }

    throw new UnauthorizedException('Failed to log in');
  }
}
