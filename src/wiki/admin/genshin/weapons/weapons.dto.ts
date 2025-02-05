import { rarityType } from "@/utils/zod_types";
import { z } from "zod";

const createSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string(),
  rarity: rarityType,
  effect: z.string().optional(),
  version: z.string(),
});

const updateSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string().optional(),
  rarity: rarityType,
  effect: z.string().optional(),
  version: z.string().optional(),
});

export {
  createSchema,
  updateSchema,
};