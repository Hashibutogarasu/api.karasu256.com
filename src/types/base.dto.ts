import { z } from "zod";

const created_updated_at = z.object({
  created_at: z.string().date(),
  updated_at: z.string().date(),
});

export { created_updated_at };