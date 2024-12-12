import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { GoogleGuard } from './google.guard';
import { GoogleService } from './google.service';

@Controller('auth/google')
export class GoogleController {
  constructor(
    private readonly googleService: GoogleService,
  ) {
  }

  @Get('login')
  async google() {
    return this.googleService.getOAuthUrl({
      redirectTo: process.env.FRONTEND_URL,
    });
  }
}
