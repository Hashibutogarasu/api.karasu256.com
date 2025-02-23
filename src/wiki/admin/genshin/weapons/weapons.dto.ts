import { rarityType, url } from "@/utils/zod_types";
import { z } from "zod";
import { versionsSchema } from "../versions/versions.dto";

const weaponTypeSchema = z.string();

const weaponSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  icon_url: url,
  rarity: rarityType,
  effect: z.string(),
  type: weaponTypeSchema,
  version: versionsSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

const createSchema = weaponSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const updateSchema = weaponSchema.omit({
  createdAt: true,
  updatedAt: true,
});

export {
  weaponSchema,
  createSchema,
  updateSchema
}