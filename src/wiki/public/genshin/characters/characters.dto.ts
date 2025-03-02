import { charactersSchema } from "@/wiki/admin/genshin/characters/characters.dto";
import { z } from "zod";

const getSchema = charactersSchema.omit({
  createdAt: true,
  updatedAt: true,
}).partial();

export {
  getSchema,
}