import { rarityType } from "@/utils/zod_types";
import { queryDtoSchema } from "@karasu-lab/karasu-lab-sdk";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getWeaponSchema = queryDtoSchema.extend({
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string().optional(),
  rarity: rarityType.optional(),
  effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

class GetWeaponDto extends createZodDto(getWeaponSchema) { }

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
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string().optional(),
  rarity: rarityType,
  effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

class UpdateWeaponDto extends createZodDto(updateWeaponSchema) { }

export {
  createWeaponSchema,
  updateWeaponSchema,
  getWeaponSchema,
  GetWeaponDto,
  CreateWeaponDto,
  UpdateWeaponDto,
};