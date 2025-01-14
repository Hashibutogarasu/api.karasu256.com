import { z } from "zod";
import { CharacterExtSchema } from "./character_ext";
import { CharacterFilterValuesSchema } from "./character_filter_values";
import { CharacterModulesSchema } from "./character_module";

export const CharacterPageSchema = z.object({
  alias_name: z.string().optional(),
  beta: z.boolean().default(false),
  correct_lock_status: z.string(),
  desc: z.string().default(""),
  edit_lock_status: z.string().default("Unlock"),
  ext: CharacterExtSchema.nullable(),
  filter_values: CharacterFilterValuesSchema.nullable(),
  header_img_url: z.string().default(""),
  icon_url: z.string(),
  id: z.string(),
  lang: z.string().default(""),
  langs: z.array(z.any()).default([]),
  menu_id: z.string().default("2"),
  menu_name: z.string(),
  menu_style: z.string().default(""),
  menus: z.array(z.any()).default([]),
  modules: z.array(CharacterModulesSchema).nullable(),
  name: z.string(),
  page_type: z.string().default("Default"),
  template_id: z.string(),
  template_layout: z.any().nullable(),
  version: z.string(),
});