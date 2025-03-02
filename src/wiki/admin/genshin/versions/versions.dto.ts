import { z } from "zod";
import { artifactSetSchema } from "../artifact-sets/artifact-sets.dto";
import { regionSchema } from "../regions/regions.dto";

const versionsSchema = z.object({
  id: z.string(),
  name: z.string(),
  version_string: z.string(),
  released: z.boolean(),
  artifact_sets: z.array(artifactSetSchema).nullish(),
  regions: z.array(regionSchema).nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const createSchema = versionsSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const updateSchema = versionsSchema.omit({
  createdAt: true,
  updatedAt: true,
});

export {
  versionsSchema,
  createSchema,
  updateSchema
}