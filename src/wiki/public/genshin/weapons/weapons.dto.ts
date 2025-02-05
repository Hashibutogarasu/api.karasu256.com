import { getParamsSchema, paginationSchema } from "@/utils/dto";
import { rarityType } from "@/utils/zod_types";
import { z } from "zod";

const base = getParamsSchema.extend({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  type: z.string().optional(),
  rarity: rarityType.optional(),
  effect: z.string().optional(),
  version: z.string().optional(),
});

const getSchema = base.extend({});

export {
  getSchema,
};