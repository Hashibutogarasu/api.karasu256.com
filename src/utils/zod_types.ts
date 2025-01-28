import { z } from "zod";

const rarityType = z.preprocess((a) => parseInt(z.string().parse(a), 4),
  z.number().gte(4, { message: 'レアリティは4以上でなければいけません' }).lte(5, { message: 'レアリティは5以下でなければいけません' }).transform(Number).optional().default(4));


const idType = z.string({ invalid_type_error: "idの型が不正です" }).transform(Number);

export { rarityType, idType }