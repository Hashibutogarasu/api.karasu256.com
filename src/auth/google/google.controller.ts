import { Controller, Get } from '@nestjs/common';
import { GoogleService } from './google.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('auth/google')
export class GoogleController {
  constructor(
    private readonly googleService: GoogleService,
  ) {
  }

  @ApiResponse({
    status: 200,
    description: 'Redirects to Google OAuth page',
  })
  @Get('login')
  async google() {
    return this.googleService.getOAuthUrl({
      redirectTo: process.env.FRONTEND_URL,
    });
  }
}
