import { z } from "zod";
import { CharacterFilterValueSchema } from "./character_filter_value";

export const CharacterFilterValuesSchema = z.object({
  character_rarity: CharacterFilterValueSchema.nullable(),
  character_property: CharacterFilterValueSchema.nullable(),
  character_vision: CharacterFilterValueSchema.nullable(),
  character_weapon: CharacterFilterValueSchema.nullable(),
  character_region: CharacterFilterValueSchema.nullable(),
});