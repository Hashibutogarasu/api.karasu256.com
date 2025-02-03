import { baseSchema } from "@/utils/dto";
import { z } from "zod";

const getSchema = baseSchema.optional();

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
  getSchema,
  createSchema,
  updateSchema,
}