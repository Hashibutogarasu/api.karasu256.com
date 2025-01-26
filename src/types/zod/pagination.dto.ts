import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const paginationSchema = z.object({
  page: z.number().default(1),
  limit: z.number().default(10),
});

class PaginationDto extends createZodDto(paginationSchema) { }

export {
  paginationSchema,
  PaginationDto,
};