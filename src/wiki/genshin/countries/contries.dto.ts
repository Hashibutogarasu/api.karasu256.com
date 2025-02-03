import { paginationSchema } from "@/utils/dto";
import { z } from "zod";

const base = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  version: z.string().optional(),
}).merge(paginationSchema)

const getSchema = base.extend({
  query: base.optional()
});

const createSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  sumbnail_url: z.string().url({ message: 'sumbnail_urlはurlである必要があります' }).optional(),
  version: z.string(),
});

const updateSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  version: z.string().optional(),
});

export {
  getSchema,
  createSchema,
  updateSchema,
}