import { getParamsSchema } from "@/utils/dto";
import { z } from "zod";

const base = getParamsSchema.extend({
  id: z.string().optional(),
  name: z.string().optional(),
  version_string: z.string().optional(),
  released: z.boolean().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

const getSchema = base.extend({});

const createSchema = z.object({
  name: z.string().optional(),
  version_string: z.string(),
  released: z.boolean().optional(),
});

const updateSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  version_string: z.string().optional(),
  released: z.boolean().optional(),
});

export {
  getSchema,
  createSchema,
  updateSchema,
}