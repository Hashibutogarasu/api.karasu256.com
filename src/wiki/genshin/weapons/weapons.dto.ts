import { paginationSchema } from "@/types/zod/pagination.dto";
import { idType, rarityType } from "@/utils/zod_types";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getWeaponSchema = paginationSchema.extend({
  id: idType.optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string().optional(),
  rarity: rarityType.optional(),
  effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
  createdAt: z.string().datetime().optional().default(new Date().toISOString()),
  updatedAt: z.string().datetime().optional().default(new Date().toISOString()),
});

class GetWeaponDto extends createZodDto(getWeaponSchema) { }

const getWeaponParamsSchema = z.object({
  id: idType,
});

class GetWeaponParamsDto extends createZodDto(getWeaponParamsSchema) { }

const createWeaponSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string(),
  rarity: rarityType,
  effect: z.string().optional(),
  version: z.string().default('1.0'),
});

class CreateWeaponDto extends createZodDto(createWeaponSchema) { }

const updateWeaponSchema = z.object({
  id: idType,
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string().optional(),
  rarity: rarityType,
  effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

class UpdateWeaponDto extends createZodDto(updateWeaponSchema) { }

const deleteWeaponSchema = z.object({
  id: idType,
});

class DeleteWeaponDto extends createZodDto(deleteWeaponSchema) { }

export {
  createWeaponSchema,
  updateWeaponSchema,
  deleteWeaponSchema,
  getWeaponSchema,
  getWeaponParamsSchema,
  GetWeaponDto,
  CreateWeaponDto,
  UpdateWeaponDto,
  DeleteWeaponDto,
  GetWeaponParamsDto,
};