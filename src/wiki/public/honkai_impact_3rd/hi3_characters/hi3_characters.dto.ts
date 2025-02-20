import { getParamsSchema } from "@/utils/dto";
import { z } from "zod";

const getSchema = getParamsSchema.extend({
});


type GetDto = z.infer<typeof getSchema>;

const getOneSchema = z.object({
  id: z.string().nullish(),
});

type GetOneDto = z.infer<typeof getOneSchema>;

export {
  getSchema,
  getOneSchema,
  GetDto,
  GetOneDto
}