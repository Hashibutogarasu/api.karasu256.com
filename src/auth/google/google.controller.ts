import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GoogleService } from './google.service';
import { ApiBody } from '@nestjs/swagger';

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
