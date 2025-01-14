import { z } from "zod";

export const CharacterKeySchema = z.object({
  key: z.string(),
  text: z.string(),
  values: z.array(z.any()),
  mi18n_key: z.string(),
  is_multi_select: z.boolean(),
  id: z.string(),
  is_hidden: z.boolean(),
  updated_at: z.string(),
});