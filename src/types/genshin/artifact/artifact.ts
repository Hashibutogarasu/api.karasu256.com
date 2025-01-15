import { z } from "zod";
import { artifactSetSchema } from "./artifact_set";

export const artifactSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().optional(),
  artifactSet: artifactSetSchema.optional(),
});
