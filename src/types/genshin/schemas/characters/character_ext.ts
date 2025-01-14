import { z } from "zod";
import { CharacterPostExtSchema } from "./character_post_ext";

export const CharacterExtSchema = z.object({
  corner_mark: z.string(),
  fe_ext: z.string().nullable(),
  personalized_color: z.string().nullable(),
  scrolling_text: z.string(),
  server_ext: z.string().nullable(),
  post_ext: CharacterPostExtSchema.nullable(),
});