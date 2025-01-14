import { z } from "zod";
import { CharacterDataSchema } from "./character_data";

export const CharacterInfoSchema = z.object({
  retcode: z.number().int(),
  message: z.string(),
  data: CharacterDataSchema.nullable(),
});

export type CharacterInfoType = z.infer<typeof CharacterInfoSchema>;