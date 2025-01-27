import { paginationSchema } from "@/types/zod/pagination.dto";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getArtifactSetSchema = paginationSchema.extend({
  id: z.number({ invalid_type_error: "idの型が不正です" }).optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  version: z.string().optional().default('1.0'),
});

class GetArtifactSetDto extends createZodDto(getArtifactSetSchema) { }

const getArtifactSetParamsSchema = z.object({
  id: z.number({ invalid_type_error: "idの型が不正です" }).optional(),
});

class GetArtifactSetParamsDto extends createZodDto(getArtifactSetParamsSchema) { }

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
  id: z.number({ invalid_type_error: "idの型が不正です" }),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

class UpdateArtifactSetDto extends createZodDto(updateArtifactSetSchema) { }

const deleteArtifactSetSchema = z.object({
  id: z.number({ invalid_type_error: "idの型が不正です" }).default(0),
});

class DeleteArtifactSetDto extends createZodDto(deleteArtifactSetSchema) { }

export {
  getArtifactSetSchema,
  getArtifactSetParamsSchema,
  createArtifactSetSchema,
  updateArtifactSetSchema,
  deleteArtifactSetSchema,
  GetArtifactSetDto,
  GetArtifactSetParamsDto,
  CreateArtifactSetDto,
  UpdateArtifactSetDto,
  DeleteArtifactSetDto,
}