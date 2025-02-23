import { z } from "zod";

const regionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  icon_url: z.string().url(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const createSchema = regionSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const updateSchema = regionSchema.omit({
  createdAt: true,
  updatedAt: true,
});

export {
  regionSchema,
  createSchema,
  updateSchema,
}