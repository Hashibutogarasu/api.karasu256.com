import { baseSchema } from "@/utils/dto";
import { rarityType } from "@/utils/zod_types";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getSchema = baseSchema.extend({
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string().optional(),
  rarity: rarityType.optional(),
  effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

const createSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string(),
  rarity: rarityType,
  effect: z.string().optional(),
  version: z.string().default('1.0'),
});

const updateSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string().optional(),
  rarity: rarityType,
  effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

export {
  getSchema,
  createSchema,
  updateSchema,
};