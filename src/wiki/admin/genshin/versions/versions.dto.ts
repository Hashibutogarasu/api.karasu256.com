import { z } from "zod";

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
  createSchema,
  updateSchema,
}