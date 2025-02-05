import { baseSchema, getParamsSchema } from "@/utils/dto";

const getSchema = baseSchema.merge(getParamsSchema).optional();

export {
  getSchema,
}