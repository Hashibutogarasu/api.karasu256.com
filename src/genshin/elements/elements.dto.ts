import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const CreateElementDtoSchema = z.object({
  name: z.string().optional(),
  slug: z.string().optional(),
});

export class CreateElementDto extends createZodDto(CreateElementDtoSchema) { }

export const UpdateElementDtoSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  slug: z.string().optional(),
});

export class UpdateElementDto extends createZodDto(UpdateElementDtoSchema) { }

export const DeleteElementDtoSchema = z.object({
  id: z.string(),
});

export class DeleteElementDto extends createZodDto(DeleteElementDtoSchema) { }

export const GetElementDtoSchema = z.object({
  id: z.string(),
});

export class GetElementDto extends createZodDto(GetElementDtoSchema) { }

export const GetElementsDtoSchema = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
  name: z.string().optional(),
});

export class GetElementsDto extends createZodDto(GetElementsDtoSchema) { }

export const FindElementDtoSchema = z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  name: z.string().optional(),
});

export class FindElementDto extends createZodDto(FindElementDtoSchema) { }
