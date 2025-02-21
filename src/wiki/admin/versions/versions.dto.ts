import { z } from "zod";

const versionsSchema = z.object({
  id: z.string(),
  name: z.string(),
  version_string: z.string(),
  released: z.boolean(),
  artifact_sets: z.array(z.string()).nullish(),
  regions: z.array(z.string()).nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export {
  versionsSchema
}