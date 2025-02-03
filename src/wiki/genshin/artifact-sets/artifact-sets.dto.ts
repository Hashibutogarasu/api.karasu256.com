import { z } from "zod";

const getSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

const createSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().default('1.0'),
});

const updateSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

export {
  getSchema,
  createSchema,
  updateSchema,
}