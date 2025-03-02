import { z } from "zod";

const galleriesSchema = z.object({
  id: z.string(),
  url: z.string(),
  alt: z.string(),
  key: z.string().optional(),
  character: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const createSchema = galleriesSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const updateSchema = z.object({
  id: z.string().nonempty(),
  url: z.string().url(),
  alt: z.string(),
  key: z.string(),
  character: z.string(),
});

export {
  galleriesSchema,
  createSchema,
  updateSchema,
};