import { z } from "zod";
import { versionsSchema } from "../versions/versions.dto";

const artifactSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  icon_url: z.string(),
  version: versionsSchema.omit({
    createdAt: true,
    updatedAt: true,
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const createSchema = artifactSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

type CreateArtifactSetDto = z.infer<typeof createSchema>;

const updateSchema = artifactSchema.omit({
  createdAt: true,
  updatedAt: true,
});

type UpdateArtifactSetDto = z.infer<typeof updateSchema>;

export {
  artifactSchema,
  createSchema,
  updateSchema
}