import { getParamsSchema, paginationSchema } from "@/utils/dto";
import { rarityType } from "@/utils/zod_types";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const base = getParamsSchema.extend({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  element: z.string().optional(),
  region: z.string().optional(),
  weapon: z.string().optional(),
  header_img_url: z.string().url({ message: 'header_img_urlはurlである必要があります' }).optional(),
  rarity: rarityType.optional(),
  version: z.string().optional(),
  property: z.string().optional(),
  unimplemented: z.string().transform((value) => value === 'true').optional(),
});

const getSchema = base.extend({});

const createSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  element: z.string(),
  region: z.string(),
  weapon: z.string().optional(),
  header_img_url: z.string().url({ message: 'header_img_urlはurlである必要があります' }).optional(),
  artifact_set: z.array(z.string()).optional(),
  weapon_type: z.string().optional(),
  rarity: rarityType.optional(),
  property: z.string().optional(),
  version: z.string(),
  unimplemented: z.boolean().default(false),
});

const updateSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().url({ message: 'icon_urlはurlである必要があります' }).optional(),
  header_img_url: z.string().url({ message: 'header_img_urlはurlである必要があります' }).optional(),
  element: z.string().optional(),
  region: z.string().optional(),
  weapon_type: z.string().optional(),
  rarity: rarityType.optional(),
  property: z.string().optional(),
  version: z.string().optional(),
  unimplemented: z.boolean().optional(),
});

const property = z.object({
  values: z.array(z.string()).default([]),
  value_types: z.array(z.object({
    id: z.string({ message: "value_types.idの型が不正です" }),
    value: z.string({ message: "value_types.valueの型が不正です" }),
    mi18n_key: z.string({ message: "value_types.mi18n_keyの型が不正です" }),
    icon: z.string({ message: "value_types.iconの型が不正です" }).optional(),
    icon_url: z.string({ message: "value_types.icon_urlの型が不正です" }).optional(),
    enum_string: z.string({ message: "value_types.enum_stringの型が不正です" }),
  }, { message: "value_typesの型が不正です" })).default([]),
  key: z.object({
    key: z.string({ message: "key.keyの型が不正です" }),
    text: z.string({ message: "key.textの型が不正です" }),
    values: z.array(z.string({ message: "key.valuesの型が不正です" }), { message: "valuesの型が不正です" }).default([]),
    mi18n_key: z.string({ message: "key.mi18n_keyの型が不正です" }),
    is_multi_select: z.boolean().default(false),
    id: z.string({ message: "key.idの型が不正です" }),
    is_hidden: z.boolean().default(false),
    updated_at: z.string({ message: "key.updated_atの型が不正です" }),
  }, { message: "keyの型が不正です" }).nullable(),
}, { message: "propertyの型が不正です" });

const fileterValues = z.object({
  character_property: property.optional(),
  character_weapon: property.optional(),
  character_rarity: property.optional(),
  character_vision: property.optional(),
  character_region: property.optional(),
});

const importFromHoyoLabSchema = z.object({
  entry_page_id: z.string(),
});

class ImportFromHoyoLabDto extends createZodDto(importFromHoyoLabSchema) { }

const importCharacterSchema = z.object({
  id: z.string({ message: "idの型が不正です" }),
  name: z.string({ message: "nameの型が不正です" }),
  desc: z.string({ message: "descの型が不正です" }),
  icon_url: z.string({ message: "icon_urlの型が不正です" }),
  header_img_url: z.string({ message: "header_img_urlの型が不正です" }),
  modules: z.array(z.object({
    name: z.string(),
    is_posed: z.boolean().default(false),
    components: z.array(z.object({
      component_id: z.string(),
      layout: z.string(),
      data: z.string().optional(),
      style: z.string(),
    }, { message: "componentsの型が不正です" })).default([]),
    id: z.string({ message: "idの型が不正です" }),
    is_customize_name: z.boolean().default(false),
    is_abstract: z.boolean().default(false),
    is_show_switch: z.boolean().default(false),
    switch: z.boolean().default(false),
    desc: z.string(),
    repeated: z.boolean().default(false),
    is_submodule: z.boolean().default(false),
    origin_module_id: z.string(),
    without_border: z.boolean().default(false),
    can_delete: z.boolean().default(false),
    is_hidden: z.boolean().default(false),
    rich_text_editing: z.boolean().default(false),
  })).default([]),
  filter_values: fileterValues,
  menu_id: z.string(),
  menu_name: z.string(),
  version: z.string(),
  langs: z.array(z.string()).default([]),
  template_layout: z.any(),
  edit_lock_status: z.string(),
  correct_lock_status: z.string(),
  template_id: z.string(),
  ext: z.object({
    fe_ext: z.string(),
    post_ext: z.object({
      post_id: z.string(),
      post_user_name: z.string(),
      post_time: z.string(),
      post_avater_url: z.string().optional(),
      url: z.string(),
    }),
    server_ext: z.string(),
    personalized_color: z.string(),
    scrolling_text: z.string(),
    corner_mark: z.string(),
  }),
  alias_name: z.string(),
  lang: z.string(),
  beta: z.boolean().default(false),
  page_type: z.string(),
  menu_style: z.string(),
});

class ImportCharacterDto extends createZodDto(importCharacterSchema) { }

export {
  getSchema,
  createSchema,
  updateSchema,
  fileterValues,
  importCharacterSchema,
  importFromHoyoLabSchema,
  ImportFromHoyoLabDto,
  ImportCharacterDto,
}