import { url } from "@/utils/zod_types";
import { z } from "zod";

const artifactSetSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  icon_url: url,
  rarity: z.number().int().min(1).max(5),
  two_piece_bonus: z.string(),
  four_piece_bonus: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export {
  artifactSetSchema
}