import { z } from "zod";

const createSchema = z.object({
  url: z.string().url(),
  alt: z.string(),
  key: z.string(),
  character: z.string(),
});

const updateSchema = z.object({
  id: z.string().nonempty(),
  url: z.string().url(),
  alt: z.string(),
  key: z.string(),
  character: z.string(),
});

export {
  createSchema,
  updateSchema,
}