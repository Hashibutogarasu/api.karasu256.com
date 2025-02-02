import { paginationSchema } from "@/types/zod/pagination.dto";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getCountriesSchema = paginationSchema.extend({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  version: z.string().optional().default('1.0'),
});

class GetCountriesDto extends createZodDto(getCountriesSchema) { }


const createCountrySchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  sumbnail_url: z.string().url({ message: 'sumbnail_urlはurlである必要があります' }).optional(),
  version: z.string().default('1.0'),
});

class CreateCountryDto extends createZodDto(createCountrySchema) { }

const updateCountrySchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  version: z.string().optional().default('1.0'),
});

class UpdateCountryDto extends createZodDto(updateCountrySchema) { }


export {
  getCountriesSchema,
  createCountrySchema,
  updateCountrySchema,
  GetCountriesDto,
  CreateCountryDto,
  UpdateCountryDto,
}