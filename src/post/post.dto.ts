import { ApiProperty } from "@nestjs/swagger";
import { UsersEntity } from "../user/user.entity";
import { IsString, IsNotEmpty, MaxLength, IsOptional } from "class-validator";
import { Column } from "typeorm";

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

export class GetAllPostsDto {
  @IsOptional()
  @ApiProperty()
  page: number | null = 1;

  @IsOptional()
  @ApiProperty()
  limit: number | null = 10;
}

export class UpdatePostDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  postId: string;
}

export class DeletePostDto {
  @ApiProperty()
  id: string;
}
