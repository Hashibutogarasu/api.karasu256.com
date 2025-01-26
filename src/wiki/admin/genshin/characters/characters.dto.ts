import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getCharacterSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().optional(),
  element: z.string().optional().default('Anemo'),
  country: z.string().optional().default('Mondstadt'),
  rarity: z.number().optional().default(4),
  version: z.string().optional().default('1.0'),
  createdAt: z.string().datetime().optional().default(new Date().toISOString()),
  updatedAt: z.string().datetime().optional().default(new Date().toISOString()),
});

class GetCharacterDto extends createZodDto(getCharacterSchema) { }

const createCharacterSchema = z.object({
  name: z.string(),
  description: z.string(),
  icon_url: z.string(),
  element: z.string().default('Anemo'),
  country: z.string().default('Mondstadt'),
  rarity: z.number().default(4),
  version: z.string().default('1.0'),
});

class CreateCharacterDto extends createZodDto(createCharacterSchema) { }

const updateCharacterSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().optional(),
  element: z.string().optional().default('Anemo'),
  country: z.string().optional().default('Mondstadt'),
  rarity: z.number().optional().default(4),
  version: z.string().optional().default('1.0'),
});

class UpdateCharacterDto extends createZodDto(updateCharacterSchema) { }

const deleteCharacterSchema = z.object({
  id: z.number().default(0),
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