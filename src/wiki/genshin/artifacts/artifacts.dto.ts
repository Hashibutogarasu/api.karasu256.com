import { paginationSchema } from "@/utils/dto";
import { z } from "zod";

const base = paginationSchema.extend({
  id: z.string().optional().nullable(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().optional(),
});

const getSchema = base.extend({
  query: base.optional()
});

const createSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string(),
});

const updateSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().optional(),
});

export {
  getSchema,
  createSchema,
  updateSchema,
}