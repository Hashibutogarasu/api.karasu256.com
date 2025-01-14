import { z } from "zod";
import { CharacterComponentsSchema } from "./character_component";

export const CharacterModulesSchema = z.object({
  name: z.string(),
  is_poped: z.boolean(),
  components: z.array(CharacterComponentsSchema).nullable(),
  id: z.string(),
  is_customize_name: z.boolean(),
  is_abstract: z.boolean(),
  is_show_switch: z.boolean(),
  switch: z.boolean(),
  desc: z.string(),
  repeated: z.boolean(),
  is_submodule: z.boolean(),
  origin_module_id: z.string(),
  without_border: z.boolean(),
  can_delete: z.boolean(),
  is_hidden: z.boolean(),
  rich_text_editing: z.boolean(),
});