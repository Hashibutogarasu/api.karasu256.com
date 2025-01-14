import { z } from "zod";
import { CharacterListEntitySchema } from "./character_list";

export const CharacterDataSchema = z.object({
  list: z.array(CharacterListEntitySchema).default([]),
  total: z.string().nullable(),
});