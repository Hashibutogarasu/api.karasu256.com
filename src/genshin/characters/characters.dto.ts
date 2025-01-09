import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const CreateCharacterDtoSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  weaponType: z.string().default("sword"),
  element: z.string().default("anemo"),
  rarity: z.number().default(4),
  image: z.string().optional(),
  country: z.string(),
});

export class CreateCharacterDto extends createZodDto(CreateCharacterDtoSchema) { }

export const UpdateCharacterDtoSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().optional(),
  weaponType: z.string().optional(),
  element: z.string().optional(),
  rarity: z.number().optional(),
  image: z.string().optional(),
  country: z.string().optional(),
});

export class UpdateCharacterDto extends createZodDto(UpdateCharacterDtoSchema) { }

export const DeleteCharacterDtoSchema = z.object({
  id: z.string(),
});

export class DeleteCharacterDto extends createZodDto(DeleteCharacterDtoSchema) { }

export const GetCharacterDtoSchema = z.object({
  id: z.string(),
});

export class GetCharacterDto extends createZodDto(GetCharacterDtoSchema) { }

export const GetCharactersDtoSchema = z.object({
  id: z.string().optional(),
  page: z.number().optional(),
  limit: z.number().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  rarity: z.number().optional().default(4),
  image: z.string().optional(),
  weaponType: z.string().optional().default("sword"),
  country: z.string().optional(),
});

export class GetCharactersDto extends createZodDto(GetCharactersDtoSchema) { }

export const GetCharactersByElementSlugDtoSchema = z.object({
  element: z.string(),
  page: z.number().optional().default(1),
  limit: z.number().optional().default(10),
});

export class GetCharactersByElementSlugDto extends createZodDto(GetCharactersByElementSlugDtoSchema) { }

export const FindCharacterDtoSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  element: z.string().optional().default("anemo"),
  rarity: z.number().optional().default(4),
  image: z.string().optional(),
  weaponType: z.string().optional().default("sword"),
  country: z.string().optional(),
});

export class FindCharacterDto extends createZodDto(FindCharacterDtoSchema) { }
