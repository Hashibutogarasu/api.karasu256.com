import { ApiProperty } from "@nestjs/swagger";
import { MessageDto } from "../user/user.controller";

export class AccessTokenDto {
  @ApiProperty()
  accessToken: string;
}

export class SignInWithOtpDto extends MessageDto {
  @ApiProperty()
  token: string;
}
