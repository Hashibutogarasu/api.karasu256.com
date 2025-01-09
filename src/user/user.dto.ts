import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const CreateUserDtoSchema = z.object({
  user: z.object({
    id: z.string(),
  }),
  displayName: z.string(),
  email: z.string().optional(),
  emailIsPublic: z.boolean(),
  name: z.string(),
  bio: z.string().optional(),
  avatarUrl: z.string().optional(),
});

export class CreateUserDto extends createZodDto(CreateUserDtoSchema) { }

export const GetUserDtoSchema = z.object({
  displayName: z.string(),
});

export class GetUserDto extends createZodDto(GetUserDtoSchema) { }

export const UpdateUserDtoSchema = z.object({
  displayName: z.string().optional(),
  emailIsPublic: z.boolean().optional(),
  name: z.string().optional(),
  bio: z.string().optional(),
  avatarUrl: z.string().optional(),
});

export class UpdateUserDto extends createZodDto(UpdateUserDtoSchema) { }

export const CreateUserPublicProfileDtoSchema = z.object({
  displayName: z.string(),
  name: z.string().optional(),
  bio: z.string().optional(),
  avatarUrl: z.string().optional(),
});

export class CreateUsersPublicProfileDto extends createZodDto(CreateUserPublicProfileDtoSchema) { }

export const UpdateUsersPublicProfileDtoSchema = z.object({
  name: z.string().optional(),
  displayName: z.string().optional(),
  bio: z.string().optional(),
  avatarUrl: z.string().optional(),
});

export class UpdateUsersPublicProfileDto extends createZodDto(UpdateUsersPublicProfileDtoSchema) { }

export const UserExistsDtoSchema = z.object({
  id: z.string(),
});

export class UserExistsDto extends createZodDto(UserExistsDtoSchema) { }

export const UserExistsResponseDtoSchema = z.object({
  exists: z.boolean(),
});

export class UserExistsResponseDto extends createZodDto(UserExistsResponseDtoSchema) { }

export const MessageDtoSchema = z.object({
  message: z.string(),
});

export class MessageDto extends createZodDto(MessageDtoSchema) { }