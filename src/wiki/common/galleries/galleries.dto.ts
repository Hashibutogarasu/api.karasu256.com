import { createZodDto } from "nestjs-zod";
import { z } from "zod";
import { queryDtoSchema } from "@karasu-lab/karasu-lab-sdk";

const getGallerySchema = queryDtoSchema.extend({
  alt: z.string().optional(),
  key: z.string().optional(),
  url: z.string().url({ message: 'urlはurlである必要があります' }).optional(),
  character: z.string().optional(),
});

class GetGalleryDto extends createZodDto(getGallerySchema) { }

const getGalleryParamsSchema = z.object({
  id: z.string().optional(),
});

class GetGalleryParamsDto extends createZodDto(getGalleryParamsSchema) { }

const createGallerySchema = z.object({
  alt: z.string().optional(),
  key: z.string().optional(),
  url: z.string().url({ message: 'urlはurlである必要があります' }).optional(),
  character: z.string().optional(),
})

class CreateGalleryDto extends createZodDto(createGallerySchema) { }

const updateGallerySchema = z.object({
  id: z.string().optional(),
  alt: z.string().optional(),
  key: z.string().optional(),
  url: z.string().url({ message: 'urlはurlである必要があります' }).optional(),
  character: z.string().optional(),
});

class UpdateGalleryDto extends createZodDto(updateGallerySchema) { }

export {
  getGallerySchema,
  getGalleryParamsSchema,
  createGallerySchema,
  updateGallerySchema,
  GetGalleryDto,
  GetGalleryParamsDto,
  CreateGalleryDto,
  UpdateGalleryDto,
};
