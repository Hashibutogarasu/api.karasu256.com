import { paginationSchema } from "@/types/zod/pagination.dto";
import { idType } from "@/utils/zod_types";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getCountriesSchema = paginationSchema.extend({
  id: idType.optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  version: z.string().optional().default('1.0'),
});

class GetCountriesDto extends createZodDto(getCountriesSchema) { }

const getCountriesParamsSchema = z.object({
  id: idType.optional(),
});

class GetCountriesParamsDto extends createZodDto(getCountriesParamsSchema) { }

const createCountrySchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  sumbnail_url: z.string().url({ message: 'sumbnail_urlはurlである必要があります' }).optional(),
  version: z.string().default('1.0'),
});

class CreateCountryDto extends createZodDto(createCountrySchema) { }

const updateCountrySchema = z.object({
  id: idType,
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  version: z.string().optional().default('1.0'),
});

class UpdateCountryDto extends createZodDto(updateCountrySchema) { }

const deleteCountrySchema = z.object({
  id: idType,
});

class DeleteCountryDto extends createZodDto(deleteCountrySchema) { }

export {
  getCountriesSchema,
  getCountriesParamsSchema,
  createCountrySchema,
  updateCountrySchema,
  deleteCountrySchema,
  GetCountriesDto,
  GetCountriesParamsDto,
  CreateCountryDto,
  UpdateCountryDto,
  DeleteCountryDto,
}