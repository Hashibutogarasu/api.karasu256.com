import { z } from "zod";

export const GenshinValueTypeSchema = z.nativeEnum({
  number: 'number',
  percentage: 'percentage',
});

export type GenshinValueType = z.infer<typeof GenshinValueTypeSchema>;