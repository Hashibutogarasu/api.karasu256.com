import { queryDtoSchema } from "@karasu-lab/karasu-lab-sdk";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getArtifactSchema = queryDtoSchema.extend({
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

class GetArtifactDto extends createZodDto(getArtifactSchema) { }

const createArtifactSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().default('1.0'),
});

class CreateArtifactDto extends createZodDto(createArtifactSchema) { }

const updateArtifactSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

class UpdateArtifactDto extends createZodDto(updateArtifactSchema) { }

export {
  createArtifactSchema,
  updateArtifactSchema,
  getArtifactSchema,
  GetArtifactDto,
  CreateArtifactDto,
  UpdateArtifactDto,
};