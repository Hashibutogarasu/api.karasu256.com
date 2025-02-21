import { rarityType, url } from "@/utils/zod_types";
import { z } from "zod";
import { versionsSchema } from "../../versions/versions.dto";

const weaponTypeSchema = z.enum([
  "片手剣",
  "法器",
  "両手剣",
  "弓",
  "長柄武器",
]);

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

export {
  weaponSchema
}