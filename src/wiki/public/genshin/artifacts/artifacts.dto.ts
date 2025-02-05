import { getParamsSchema } from "@/utils/dto";
import { z } from "zod";

const base = getParamsSchema.extend({
  id: z.string().optional().nullable(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().optional(),
});

const getSchema = base.extend({});

export {
  getSchema,
}