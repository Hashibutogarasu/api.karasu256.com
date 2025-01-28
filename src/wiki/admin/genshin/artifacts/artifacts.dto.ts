import { paginationSchema } from "@/types/zod/pagination.dto";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getArtifactSchema = paginationSchema.extend({
  id: z.string({ invalid_type_error: "idの型が不正です" }).transform(Number).optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

class GetArtifactDto extends createZodDto(getArtifactSchema) { }

const getArtifactParamsSchema = z.object({
  id: z.string({ invalid_type_error: "idの型が不正です" }).transform(Number).optional(),
});

class GetArtifactParamsDto extends createZodDto(getArtifactParamsSchema) { }

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
  id: z.string({ invalid_type_error: "idの型が不正です" }).transform(Number),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
});

class UpdateArtifactDto extends createZodDto(updateArtifactSchema) { }

const deleteArtifactSchema = z.object({
  id: z.string({ invalid_type_error: "idの型が不正です" }).transform(Number).default("0"),
});

class DeleteArtifactDto extends createZodDto(deleteArtifactSchema) { }

export {
  createArtifactSchema,
  updateArtifactSchema,
  deleteArtifactSchema,
  getArtifactSchema,
  getArtifactParamsSchema,
  GetArtifactDto,
  GetArtifactParamsDto,
  CreateArtifactDto,
  UpdateArtifactDto,
  DeleteArtifactDto,
};