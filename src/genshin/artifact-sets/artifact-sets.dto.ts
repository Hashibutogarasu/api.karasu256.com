import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const FindArtifactSetsBySlugDtoSchema = z.object({
  slug: z.string(),
});

export class FindArtifactSetsBySlugDto extends createZodDto(FindArtifactSetsBySlugDtoSchema) { }

export const FindArtifactSetsDtoSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().optional(),
  artifactIds: z.array(z.string()).optional(),
  recommendedSubStats: z.array(z.string()).optional(),
  characters: z.array(z.string()).optional(),
});

export class FindArtifactSetsDto extends createZodDto(FindArtifactSetsDtoSchema) { }

export const CreateArtifactSetsDtoSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  artifactIds: z.array(z.string()),
  recommendedSubStats: z.array(z.string().optional()).optional(),
  characters: z.array(z.string()).optional(),
});

export class CreateArtifactSetsDto extends createZodDto(CreateArtifactSetsDtoSchema) { }

export const UpdateArtifactSetsDtoSchema = z.object({
  id: z.string(),
  slug: z.string().optional(),
});

export class UpdateArtifactSetsDto extends createZodDto(UpdateArtifactSetsDtoSchema) { }

export const DeleteArtifactSetsDtoSchema = z.object({
  id: z.string(),
});

export class DeleteArtifactSetsDto extends createZodDto(DeleteArtifactSetsDtoSchema) { }
