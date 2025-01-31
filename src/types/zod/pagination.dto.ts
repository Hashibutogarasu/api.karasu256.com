import { number_type } from "@/utils/zod_types";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const paginationSchema = z.object({
  page: number_type.default(1),
  limit: number_type.default(10),
});

class PaginationDto extends createZodDto(paginationSchema) { }

export {
  paginationSchema,
  PaginationDto,
};