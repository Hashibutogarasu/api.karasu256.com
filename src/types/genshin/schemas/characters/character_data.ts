import { z } from "zod";
import { CharacterPageSchema } from "./character_page";

export const CharacterDataSchema = z.object({
  page: CharacterPageSchema.nullable(),
});

