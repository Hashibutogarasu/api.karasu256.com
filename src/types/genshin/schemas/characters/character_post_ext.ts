import { z } from "zod";

export const CharacterPostExtSchema = z.object({
  post_avatar_url: z.string(),
  post_id: z.string(),
  post_time: z.string(),
  post_user_name: z.string(),
  url: z.string(),
});
