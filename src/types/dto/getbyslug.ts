import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const getBySlugSchema = z.object({
  slug: z.string(),
});

export class GetBySlugDto extends createZodDto(getBySlugSchema) { }