import { ApiProperty } from "@nestjs/swagger";
import { UsersEntity } from "../user/user.entity";
import { IsString, IsNotEmpty, MaxLength, IsOptional } from "class-validator";

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  content: string;
}

export class GetPostDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  id: string;
}

export class UpdatePostDto {
  @IsNotEmpty()
  @ApiProperty()
  user: UsersEntity;

  @IsOptional()
  @ApiProperty()
  title: string | null;

  @IsOptional()
  @ApiProperty()
  content: string | null;
}
