import { url } from "@/utils/zod_types";
import { z } from "zod";

const artifactSetSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  icon_url: url,
  rarity: z.number().int().min(1).max(5),
  one_set_effect: z.string(),
  two_set_effect: z.string(),
  four_set_effect: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const createSchema = artifactSetSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

type CreateArtifactSetDto = z.infer<typeof createSchema>;

const updateSchema = artifactSetSchema.omit({
  createdAt: true,
  updatedAt: true,
});

type UpdateArtifactSetDto = z.infer<typeof updateSchema>;

export {
  artifactSetSchema,
  createSchema,
  updateSchema
}