import { paginationSchema } from "@/types/zod/pagination.dto";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getArtifactSchema = paginationSchema.extend({
  id: z.number({ invalid_type_error: "idの型が不正です" }).optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  one_set_effect: z.string().optional(),
  two_set_effect: z.string().optional(),
  four_set_effect: z.string().optional(),
  version: z.string().optional().default('1.0'),
  createdAt: z.string().datetime().optional().default(new Date().toISOString()),
  updatedAt: z.string().datetime().optional().default(new Date().toISOString()),
});

class GetArtifactDto extends createZodDto(getArtifactSchema) { }

const getArtifactParamsSchema = z.object({
  id: z.number({ invalid_type_error: "idの型が不正です" }).optional(),
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
  id: z.number({ invalid_type_error: "idの型が不正です" }),
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
  id: z.number({ invalid_type_error: "idの型が不正です" }).default(0),
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