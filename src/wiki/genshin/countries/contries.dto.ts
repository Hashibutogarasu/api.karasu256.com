import { paginationSchema } from "@/types/zod/pagination.dto";
import { baseSchema } from "@/utils/dto";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getSchema = baseSchema.extend({
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  version: z.string().optional().default('1.0'),
});

const createSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  sumbnail_url: z.string().url({ message: 'sumbnail_urlはurlである必要があります' }).optional(),
  version: z.string().default('1.0'),
});

const updateSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  version: z.string().optional().default('1.0'),
});

export {
  getSchema,
  createSchema,
  updateSchema,
}