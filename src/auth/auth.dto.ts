import { MessageDto } from "@/user/user.controller";

export class SignInDto {
  email: string;
  password: string;
};

export class PasswordLessSignInDto {
  email: string;
};

export class SignInOtpDto {
  hash: string;
};

export class SignUpDto extends SignInDto {
  email: string;
  password: string;
};

export class AccessTokenDto {
  accessToken: string;
};

export class SignInWithOtpDto extends MessageDto {
  token: string;
};

export class VerifyOtpDto {
  token_hash: string;
  type: string;
};
