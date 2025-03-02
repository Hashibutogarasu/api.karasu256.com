import { HI3Characters } from "@/entities/wiki/hi3/hi3_characters.entity";
import { z } from "zod";

z.instanceof(HI3Characters);

const hi3_weaponsSchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  skill: z.string().nullish(),
  description: z.string().nullish(),
  type: z.string().nullish(),
  max_level: z.number().nullish(),
  icon_url: z.string().nullish(),
  thumbnail_url: z.string().nullish(),
  rarity: z.number().nullish(),
  base_atk: z.number().nullish(),
  crit: z.number().nullish(),
});

const hi3_skillsSchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  description: z.string().nullish(),
  type: z.string().nullish(),
  max_level: z.number().nullish(),
  icon_url: z.string().nullish(),
});

const hi3_stigmatasSchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  description: z.string().nullish(),
  skill: z.string().nullish(),
  type: z.string().nullish(),
  two_set_skill: z.string().nullish(),
  three_set_skill: z.string().nullish(),
  max_level: z.number().nullish(),
  icon_url: z.string().nullish(),
  thumbnail_url: z.string().nullish(),
});

const create_hi3_skill_schema = hi3_skillsSchema.omit({
  id: true
}).nullish();

const update_hi3_skill_schema = hi3_skillsSchema.extend({
  id: z.string()
}).nullish();

const createDtoSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  sub_name: z.string().nullish(),
  icon_url: z.string().nullish(),
  thumbnail_url: z.string().nullish(),
  skills: z.array(create_hi3_skill_schema).nullish(),
  weapons: z.array(hi3_weaponsSchema.omit({ id: true })).nullish(),
  stigmatas: z.array(hi3_stigmatasSchema.omit({ id: true })).nullish(),
});

const updateDtoSchema = createDtoSchema.extend({
  id: z.string(),
  name: z.string().nullish(),
  description: z.string().nullish(),
  sub_name: z.string().nullish(),
  icon_url: z.string().nullish(),
  thumbnail_url: z.string().nullish(),
  skills: z.array(update_hi3_skill_schema).nullish(),
  weapons: z.array(hi3_weaponsSchema.nullish()),
});

export {
  createDtoSchema,
  updateDtoSchema
}