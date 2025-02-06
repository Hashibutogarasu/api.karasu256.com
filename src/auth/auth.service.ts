import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() { }

  async signin() {
    return "signin";
  }

  async signup() {
    return "signup";
  }

  async signinConfirm() {
    return "signinConfirm";
  }

  async forgotPassword() {
    return "forgotPassword";
  }

  async forgotPasswordConfirm() {
    return "forgotPasswordConfirm";
  }

  async changePassword() {
    return "changePassword";
  }

  async refreshToken() {
    return "refreshToken";
  }
}
