import { z, ZodTypeAny } from "zod";

export const numericString = (schema: ZodTypeAny) => z.preprocess((a) => {
  if (typeof a === 'string') {
    return parseInt(a, 10)
  } else if (typeof a === 'number') {
    return a;
  } else {
    return undefined;
  }
}, schema);

const rarityType = numericString(z.number({ message: "レアリティは数値である必要があります" }).min(4).max(5))

const idType = z.string({ invalid_type_error: "idの型が不正です" }).transform(Number);

export { rarityType, idType }