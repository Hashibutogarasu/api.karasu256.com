import { artifactSchema } from "@/wiki/admin/genshin/artifacts/artifacts.dto";

const getSchema = artifactSchema.omit({
  createdAt: true,
  updatedAt: true,
}).partial();

export {
  getSchema,
}