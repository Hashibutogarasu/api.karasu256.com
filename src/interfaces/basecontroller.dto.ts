import { createZodDto } from "nestjs-zod";
import { z, ZodRawShape } from "zod";

export function getUpdateSchema<T extends ZodRawShape>(schema: z.ZodObject<T>) {
  return z.object({
    id: z.string(),
    entity: schema.optional(),
  });
}

export class UpdateDto<T> {
  constructor(public id: string, public entity: T) { }
}

export const deleteSchema = z.object({
  id: z.string(),
});

export class DeleteDto extends createZodDto(deleteSchema) { }