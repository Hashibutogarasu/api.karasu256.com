import { z } from "zod";

export const CharacterComponentsSchema = z.object({
  component_id: z.string(),
  layout: z.string(),
  data: z.any(),
  style: z.string(),
});