import { paginationSchema } from "@/types/zod/pagination.dto";
import { idType } from "@/utils/zod_types";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getGallerySchema = paginationSchema.extend({
  id: idType.optional(),
  alt: z.string().optional(),
  key: z.string().optional(),
  url: z.string().url({ message: 'urlはurlである必要があります' }).optional(),
  character: idType.optional(),
});

class GetGalleryDto extends createZodDto(getGallerySchema) { }

const getGalleryParamsSchema = z.object({
  id: idType.optional(),
});

class GetGalleryParamsDto extends createZodDto(getGalleryParamsSchema) { }

const createGallerySchema = z.object({
  alt: z.string(),
  key: z.string().optional(),
  url: z.string().url({ message: 'urlはurlである必要があります' }),
  character: idType.optional(),
});

class CreateGalleryDto extends createZodDto(createGallerySchema) { }

const updateGallerySchema = z.object({
  id: idType,
  alt: z.string().optional(),
  key: z.string().optional(),
  url: z.string().url({ message: 'urlはurlである必要があります' }).optional(),
  character: idType.optional(),
});

class UpdateGalleryDto extends createZodDto(updateGallerySchema) { }

const deleteGallerySchema = z.object({
  id: idType,
});

class DeleteGalleryDto extends createZodDto(deleteGallerySchema) { }

export {
  getGallerySchema,
  getGalleryParamsSchema,
  createGallerySchema,
  updateGallerySchema,
  deleteGallerySchema,
  GetGalleryDto,
  GetGalleryParamsDto,
  CreateGalleryDto,
  UpdateGalleryDto,
  DeleteGalleryDto,
};
