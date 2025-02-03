import { z, ZodType } from "zod";
import { IDeleteDto } from "@karasu-lab/karasu-lab-sdk";
import { BaseEntity } from "typeorm";

const baseSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

type BaseDto = z.infer<typeof baseSchema>;

const deleteSchema = baseSchema.extend({
  id: z.string().nonempty(),
}) as ZodType<IDeleteDto>;

type DeleteDto = z.infer<typeof deleteSchema>;

const paginationSchema = z.object({
  page: z.number().int().positive(),
  limit: z.number().int().positive(),
});

const getParamsSchema = paginationSchema.extend({
  id: z.string().nonempty(),
});

type GetParamsDto<T extends BaseDto> = z.infer<typeof getParamsSchema> & T;

type GetOneDto<T extends BaseDto> = Omit<Partial<T>, keyof BaseEntity>;

type CreateDto<T extends BaseDto> = z.infer<ZodType<Partial<Omit<T, "id" | "createdAt" | "updatedAt">>>>;

type UpdateDto<T extends BaseDto> = Omit<z.infer<ZodType<Partial<Omit<T, "createdAt" | "updatedAt">>>>, keyof BaseEntity>;

export {
  baseSchema,
  deleteSchema,
  paginationSchema,
  getParamsSchema,
  DeleteDto,
  GetParamsDto,
  GetOneDto,
  CreateDto,
  UpdateDto,
};