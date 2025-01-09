import { GenshinArtifactMainStat, GenshinArtifactMainStatSchema, GenshinArtifactPart } from "@/types/genshin/artifact_type";
import { GenshinValueType, GenshinValueTypeSchema } from "@/types/genshin/value_type";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const FindArtifactBySlugDtoSchema = z.object({
  slug: z.string(),
});

export class FindArtifactBySlugDto extends createZodDto(FindArtifactBySlugDtoSchema) { }

export const DeleteArtifactDtoSchema = z.object({
  id: z.string(),
});

export class DeleteArtifactDto extends createZodDto(DeleteArtifactDtoSchema) { }

export const CreateArtifactDtoSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  part: z.string(),
  mainStat: GenshinArtifactMainStatSchema.optional(),
  mainStatValueType: GenshinValueTypeSchema.optional(),
});

export class CreateArtifactDto extends createZodDto(CreateArtifactDtoSchema) { }

export const UpdateArtifactDtoSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().optional(),
  part: z.string().optional(),
  mainStat: GenshinArtifactMainStatSchema.optional(),
  mainStatValueType: GenshinValueTypeSchema.optional(),
});

export class UpdateArtifactDto extends createZodDto(UpdateArtifactDtoSchema) { }