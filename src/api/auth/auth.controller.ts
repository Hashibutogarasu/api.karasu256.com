import { Authorization, CognitoUser } from '@nestjs-cognito/auth';
import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor() { }

  @Get()
  me(@CognitoUser() {
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
}
