import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const CreateCountryDtoSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
});

export class CreateCountryDto extends createZodDto(CreateCountryDtoSchema) { }

export const UpdateCountryDtoSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  slug: z.string().optional(),
  description: z.string().optional(),
});

export class UpdateCountryDto extends createZodDto(UpdateCountryDtoSchema) { }

export const FindCountryDtoSchema = z.object({
  slug: z.string(),
});

export class FindCountryDto extends createZodDto(FindCountryDtoSchema) { }

export const DeleteCountryDtoSchema = z.object({
  id: z.string(),
});

export class DeleteCountryDto extends createZodDto(DeleteCountryDtoSchema) { }
