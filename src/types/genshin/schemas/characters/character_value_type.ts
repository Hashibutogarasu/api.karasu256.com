import { z } from "zod";

export const CharacterValueTypeSchema = z.object({
  id: z.string(),
  value: z.string(),
  mi18n_key: z.string(),
  icon: z.string(),
  enum_string: z.string(),
});