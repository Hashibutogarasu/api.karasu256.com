import { charactersSchema } from "@/wiki/admin/genshin/characters/characters.dto";
import { regionSchema } from "@/wiki/admin/genshin/regions/regions.dto";
import { versionsSchema } from "@/wiki/admin/genshin/versions/versions.dto";
import { z } from "zod";

const getSchema = regionSchema.omit({
  createdAt: true,
  updatedAt: true,
}).extend({
  version: versionsSchema.omit({
    createdAt: true,
    updatedAt: true,
  }),
  characters: z.array(charactersSchema.omit({
    createdAt: true,
    updatedAt: true,
  }))
}).partial();

export {
  getSchema,
};