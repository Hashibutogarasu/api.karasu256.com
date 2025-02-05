import { baseSchema, getParamsSchema, paginationSchema } from "@/utils/dto";
import { z } from "zod";

const base = z.object({
  id: z.string().optional(),
  alt: z.string().optional(),
  url: z.string().optional(),
});

const getSchema = base.extend({

}).merge(paginationSchema);

export {
  getSchema,
}