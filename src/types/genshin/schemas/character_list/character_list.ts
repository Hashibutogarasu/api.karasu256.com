import { z } from "zod";
import { DisplayFieldSchema } from "./display_field";
import { CharacterFilterValueSchema } from "../characters/character_filter_value";

export const CharacterListEntitySchema = z.object({
  entry_page_id: z.string(),
  name: z.string(),
  icon_url: z.string(),
  display_field: DisplayFieldSchema,
  filter_values: CharacterFilterValueSchema,
  desc: z.string(),
});