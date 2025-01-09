import { ApiProperty } from "@nestjs/swagger";
import { User } from "@supabase/supabase-js";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { Column } from "typeorm";

export class CreateUserDto {
  user: User;

  @Column({ type: "varchar", name: "display_name" })
  @IsNotEmpty()
  @IsString()
  displayName: string;

  @IsOptional()
  @IsString()
  email: string | null;

  @IsNotEmpty()
  emailIsPublic: boolean;

  @IsNotEmpty()
  name: string;

  @IsOptional()
  bio: string | null = "";

  @IsOptional()
  avatarUrl: string | null;
};

export class GetUserDto {
  displayName: string;
};

export class UpdateUserDto {
  @Column({ type: "varchar", name: "display_name" })
  @IsOptional()
  @IsString()
  displayName: string | null;

  @Column("bool", { default: false, name: "email_is_public" })
  @IsOptional()
  emailIsPublic: boolean | null;

  @IsOptional()
  @IsString()
  name: string | null;

  @IsOptional()
  @IsString()
  bio: string | null;

  @Column({ type: "varchar", name: "avatar_url" })
  @IsOptional()
  @IsString()
  avatarUrl: string | null;
};

export class CreateUsersPublicProfileDto {
  @IsNotEmpty()
  @IsString()
  displayName: string;

  @IsOptional()
  @IsString()
  name: string | null;

  @IsOptional()
  @IsString()
  bio: string | null;

  @IsOptional()
  @IsString()
  avatarUrl: string | null;
};

export class UpdateUsersPublicProfileDto {
  @IsOptional()
  @IsString()
  name: string | null;

  @IsOptional()
  @IsString()
  displayName: string | null;

  @IsOptional()
  @IsString()
  bio: string | null;

  @IsOptional()
  @IsString()
  avatarUrl: string | null;
};

export class UserExistsDto {
  @IsNotEmpty()
  @IsString()
  id: string;
};

export class UserExistsResponseDto {
  @IsNotEmpty()
  exists: boolean;
};
