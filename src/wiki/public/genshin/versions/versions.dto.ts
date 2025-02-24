import { versionsSchema } from "@/wiki/admin/genshin/versions/versions.dto";
import { z } from "zod";

const getSchema = versionsSchema.omit({
  createdAt: true,
  updatedAt: true,
});

export {
  getSchema,
}