import { getParamsSchema } from "@/utils/dto";
import { rarityType } from "@/utils/zod_types";
import { z } from "zod";

const base = getParamsSchema.extend({
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  element: z.string().optional(),
  region: z.string().optional(),
  weapon: z.string().optional(),
  header_img_url: z.string().url({ message: 'header_img_urlはurlである必要があります' }).optional(),
  rarity: rarityType.optional(),
  version: z.string().optional(),
  property: z.string().optional(),
  unimplemented: z.string().transform((value) => value === 'true').optional(),
});

const getSchema = base.extend({});

export {
  getSchema,
}