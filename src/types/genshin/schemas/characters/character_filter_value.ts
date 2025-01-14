import { z } from "zod";
import { CharacterValueTypeSchema } from "./character_value_type";
import { CharacterKeySchema } from "./character_key";

export const CharacterFilterValueSchema = z.object({
  values: z.array(z.string()),
  value_types: z.array(CharacterValueTypeSchema),
  key: CharacterKeySchema.nullable(),
});