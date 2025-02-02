import { idType } from "@/utils/zod_types";
import { queryDtoSchema } from "@karasu-lab/karasu-lab-sdk";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getArtifactSetSchema = queryDtoSchema.extend({
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  version: z.string().optional().default('1.0'),
});

class GetArtifactSetDto extends createZodDto(getArtifactSetSchema) { }

const createArtifactSetSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().default('1.0'),
});

class CreateArtifactSetDto extends createZodDto(createArtifactSetSchema) { }

const updateArtifactSetSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

class UpdateArtifactSetDto extends createZodDto(updateArtifactSetSchema) { }

export {
  getArtifactSetSchema,
  createArtifactSetSchema,
  updateArtifactSetSchema,
  GetArtifactSetDto,
  CreateArtifactSetDto,
  UpdateArtifactSetDto,
}