import { paginationSchema } from "@/types/zod/pagination.dto";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getWeaponSchema = paginationSchema.extend({
  id: z.string({ invalid_type_error: "idの型が不正です" }).transform(Number).optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string().optional(),
  rarity: z.number().min(3, { message: 'レアリティは3以上でなければいけません' }).max(5, { message: 'レアリティは5以下でなければいけません' }).optional().default(3),
  effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
  createdAt: z.string().datetime().optional().default(new Date().toISOString()),
  updatedAt: z.string().datetime().optional().default(new Date().toISOString()),
});

class GetWeaponDto extends createZodDto(getWeaponSchema) { }

const getWeaponParamsSchema = z.object({
  id: z.string({ invalid_type_error: "idの型が不正です" }).transform(Number).optional(),
});

class GetWeaponParamsDto extends createZodDto(getWeaponParamsSchema) { }

const createWeaponSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string(),
  rarity: z.number().min(3, { message: 'レアリティは3以上でなければいけません' }).max(5, { message: 'レアリティは5以下でなければいけません' }).default(3),
  effect: z.string().optional(),
  version: z.string().default('1.0'),
});

class CreateWeaponDto extends createZodDto(createWeaponSchema) { }

const updateWeaponSchema = z.object({
  id: z.string({ invalid_type_error: "idの型が不正です" }).transform(Number),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string().optional(),
  rarity: z.number().min(3, { message: 'レアリティは3以上でなければいけません' }).max(5, { message: 'レアリティは5以下でなければいけません' }).optional().default(3),
  effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

class UpdateWeaponDto extends createZodDto(updateWeaponSchema) { }

const deleteWeaponSchema = z.object({
  id: z.string({ invalid_type_error: "idの型が不正です" }).transform(Number).default("0"),
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