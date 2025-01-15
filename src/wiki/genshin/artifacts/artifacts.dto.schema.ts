import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const getSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
});

export class GetDto extends createZodDto(getSchema) { }