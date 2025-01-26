import { paginationSchema } from "@/types/zod/pagination.dto";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getCharacterSchema = paginationSchema.extend({
  id: z.number({ invalid_type_error: "idの型が不正です" }).optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  element: z.string().optional().default('Anemo'),
  country: z.string().optional().default('Mondstadt'),
  rarity: z.number().min(4, { message: 'レアリティは4以上でなければいけません' }).max(5, { message: 'レアリティは5以下でなければいけません' }).optional().default(4),
  version: z.string().optional().default('1.0'),
  createdAt: z.string().datetime().optional().default(new Date().toISOString()),
  updatedAt: z.string().datetime().optional().default(new Date().toISOString()),
});

class GetCharacterDto extends createZodDto(getCharacterSchema) { }

const getCharacterParamsSchema = z.object({
  id: z.number({ invalid_type_error: "idの型が不正です" }).optional(),
});

class GetCharacterParamsDto extends createZodDto(getCharacterParamsSchema) { }

const getCharacterPaginateSchema = z.object({
  page: z.number({ invalid_type_error: "pageの型が不正です" }).default(1),
  limit: z.number({ invalid_type_error: "limitの型が不正です" }).default(10),
});

class GetCharacterPaginateDto extends createZodDto(getCharacterPaginateSchema) { }

const createCharacterSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  element: z.string().default('Anemo'),
  country: z.string().default('Mondstadt'),
  rarity: z.number().min(4, { message: 'レアリティは4以上でなければいけません' }).max(5, { message: 'レアリティは5以下でなければいけません' }).default(4),
  version: z.string().default('1.0'),
});

class CreateCharacterDto extends createZodDto(createCharacterSchema) { }

const updateCharacterSchema = z.object({
  id: z.number({ invalid_type_error: "idの型が不正です" }),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  element: z.string().optional().default('Anemo'),
  country: z.string().optional().default('Mondstadt'),
  rarity: z.number().min(4, { message: 'レアリティは4以上でなければいけません' }).max(5, { message: 'レアリティは5以下でなければいけません' }).optional().default(4),
  version: z.string().optional().default('1.0'),
});

class UpdateCharacterDto extends createZodDto(updateCharacterSchema) { }

const deleteCharacterSchema = z.object({
  id: z.number({ invalid_type_error: "idの型が不正です" }).default(0),
});

class DeleteCharacterDto extends createZodDto(deleteCharacterSchema) { }

export {
  createCharacterSchema,
  updateCharacterSchema,
  deleteCharacterSchema,
  getCharacterSchema,
  getCharacterParamsSchema,
  getCharacterPaginateSchema,
  GetCharacterDto,
  GetCharacterParamsDto,
  GetCharacterPaginateDto,
  CreateCharacterDto,
  UpdateCharacterDto,
  DeleteCharacterDto
};