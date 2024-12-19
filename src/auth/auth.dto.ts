import { ApiProperty } from "@nestjs/swagger";
import { MessageDto } from "@/user/user.controller";

export class SignInDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class PasswordLessSignInDto {
  @ApiProperty()
  email: string;
}

export class SignInOtpDto {
  @ApiProperty()
  hash: string;
}

export class VerifyOTPDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  token: string;
}

export class SignUpDto extends SignInDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class AccessTokenDto {
  @ApiProperty()
  accessToken: string;
}

export class SignInWithOtpDto extends MessageDto {
  @ApiProperty()
  token: string;
}
