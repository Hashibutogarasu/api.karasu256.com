import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getCharacterSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().optional(),
  element: z.string().optional(),
  country: z.string().optional(),
  rarity: z.number().optional(),
  version: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

class GetCharacterDto extends createZodDto(getCharacterSchema) { }

const createCharacterSchema = z.object({
  name: z.string(),
  description: z.string(),
  icon_url: z.string(),
  element: z.string(),
  country: z.string(),
  rarity: z.number(),
  version: z.string(),
});

class CreateCharacterDto extends createZodDto(createCharacterSchema) { }

const updateCharacterSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().optional(),
  element: z.string().optional(),
  country: z.string().optional(),
  rarity: z.number().optional(),
  version: z.string().optional(),
});

class UpdateCharacterDto extends createZodDto(updateCharacterSchema) { }

const deleteCharacterSchema = z.object({
  id: z.number(),
});

class DeleteCharacterDto extends createZodDto(deleteCharacterSchema) { }

export {
  createCharacterSchema,
  updateCharacterSchema,
  deleteCharacterSchema,
  getCharacterSchema,
  GetCharacterDto,
  CreateCharacterDto,
  UpdateCharacterDto,
  DeleteCharacterDto
};