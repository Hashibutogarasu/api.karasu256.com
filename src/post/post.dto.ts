import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const CreatePostDtoSchema = z.object({
  title: z.string().nonempty(),
  content: z.string().nonempty(),
});

export class CreatePostDto extends createZodDto(CreatePostDtoSchema) { }

export const GetPostDtoSchema = z.object({
  id: z.string().nonempty(),
});

export class GetPostDto extends createZodDto(GetPostDtoSchema) { }

export const GetAllPostsDtoSchema = z.object({
  page: z.number().optional().default(1),
  limit: z.number().optional().default(10),
});

export class GetAllPostsDto extends createZodDto(GetAllPostsDtoSchema) { }

export const UpdatePostDtoSchema = z.object({
  postId: z.string().nonempty(),
  title: z.string().optional(),
  content: z.string().optional(),
});

export class UpdatePostDto extends createZodDto(UpdatePostDtoSchema) { }

export const DeletePostDtoSchema = z.object({
  id: z.string().nonempty(),
});

export class DeletePostDto extends createZodDto(DeletePostDtoSchema) { }
