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
  page: z.string().transform((value) => parseInt(value)).optional().default("0"),
  limit: z.string().transform((value) => parseInt(value)).optional().default("10"),
});

const getParamsSchema = paginationSchema.extend({
  id: z.string().nonempty(),
});

type OmitFunctions<T, Exclude extends keyof T = never> = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  [P in keyof T as T[P] extends Function ? P extends Exclude ? P : never : P]: T[P]
}

type OmitDistributive<T, K extends PropertyKey> = T extends any ? (T extends object ? Id<OmitRecursively<T, K>> : T) : never;
type Id<T> = {} & { [P in keyof T]: T[P] } // Cosmetic use only makes the tooltips expad the type can be removed 
type OmitRecursively<T, K extends PropertyKey> = Omit<
  { [P in keyof T]: OmitDistributive<T[P], K> },
  K
>

type PartialRecursively<T, K extends PropertyKey> = Partial<
  { [P in keyof T]: OmitDistributive<T[P], K> }
>

type KeyOfType<Type, ValueType> = keyof {
  [Key in keyof Type as Type[Key] extends ValueType ? Key : never]: any;
};

type GetParamsDto<T extends BaseDto, R extends KeyOfType<T, Date | any>[]> = Omit<PartialRecursively<OmitRecursively<Omit<z.infer<typeof getParamsSchema> & T, keyof BaseEntity>, keyof BaseEntity>, keyof T>, R[number]>;

type GetOneDto<T extends BaseDto> = Omit<Omit<Partial<T>, keyof BaseEntity>, keyof BaseEntity>;

type CreateDto<T extends BaseDto> = PartialRecursively<OmitRecursively<OmitRecursively<Omit<z.infer<ZodType<Partial<Omit<T, "id" | "createdAt" | "updatedAt">>>>, keyof BaseEntity>, keyof BaseEntity>, "id" | "createdAt" | "updatedAt">, keyof BaseEntity>;

type UpdateDto<T extends BaseDto> = OmitRecursively<OmitRecursively<Omit<z.infer<ZodType<Partial<Omit<T, "createdAt" | "updatedAt">>>>, keyof BaseEntity>, keyof BaseEntity>, "createdAt" | "updatedAt">;

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