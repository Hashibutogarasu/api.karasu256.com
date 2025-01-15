import { z } from "zod";

export const artifactSetSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  icon_url: z.string().optional(),
  oneSetBonus: z.string().optional(),
  twoSetBonus: z.string().optional(),
  fourSetBonus: z.string().optional(),
});