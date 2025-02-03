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

const number_type = numericString(z.number());
const rarityType = numericString(z.number({ message: "レアリティは数値である必要があります" }).optional());

export { rarityType, number_type }