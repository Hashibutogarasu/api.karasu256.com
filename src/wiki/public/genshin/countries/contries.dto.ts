import { getParamsSchema } from "@/utils/dto";
import { z } from "zod";

const base = getParamsSchema.extend({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  version: z.string().optional(),
});

const getSchema = base.extend({});

export {
  getSchema,
};