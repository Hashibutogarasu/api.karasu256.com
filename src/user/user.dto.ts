import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { Column } from "typeorm";

export class CreateUserDto {
  @Column({ type: "varchar", name: "display_name" })
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  displayName: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  email: string | null;

  @IsNotEmpty()
  @ApiProperty()
  emailIsPublic: boolean;

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsOptional()
  @ApiProperty()
  bio: string | null = "";

  @IsOptional()
  @ApiProperty()
  avatarUrl: string | null;
}

export class GetUserDto {
  @ApiProperty()
  displayName: string;
}

export class UpdateUserDto {
  @Column({ type: "varchar", name: "display_name" })
  @IsOptional()
  @ApiProperty()
  displayName: string | null;

  @IsOptional()
  @ApiProperty()
  email: string | null;

  @Column("bool", { default: false, name: "email_is_public" })
  @IsOptional()
  @ApiProperty()
  emailIsPublic: boolean | null;

  @IsOptional()
  @ApiProperty()
  name: string | null;

  @IsOptional()
  @ApiProperty()
  bio: string | null;

  @Column({ type: "varchar", name: "avatar_url" })
  @IsOptional()
  @ApiProperty()
  avatarUrl: string | null;
}

export class UserExistsDto {
  @IsNotEmpty()
  @ApiProperty()
  id: string;
}

export class UserExistsResponseDto {
  @IsNotEmpty()
  @ApiProperty()
  exists: boolean;
}
