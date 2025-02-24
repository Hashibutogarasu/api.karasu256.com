import { artifactSetSchema } from "@/wiki/admin/genshin/artifact-sets/artifact-sets.dto";

const getSchema = artifactSetSchema.omit({
  createdAt: true,
  updatedAt: true,
});

export {
  getSchema,
}