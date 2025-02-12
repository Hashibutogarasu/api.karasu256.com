import { getParamsSchema } from "@/utils/dto";
import { z } from "zod";

const getSchema = getParamsSchema.extend({
});

type GetDto = z.infer<typeof getSchema>;

export {
  getSchema,
  GetDto
}