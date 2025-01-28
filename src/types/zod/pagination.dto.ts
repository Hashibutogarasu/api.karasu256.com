import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const paginationSchema = z.object({
  page: z.string().transform(Number).default("1"),
  limit: z.string().transform(Number).default("10"),
});

class PaginationDto extends createZodDto(paginationSchema) { }

export {
  paginationSchema,
  PaginationDto,
};