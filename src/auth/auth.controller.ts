import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

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
}
