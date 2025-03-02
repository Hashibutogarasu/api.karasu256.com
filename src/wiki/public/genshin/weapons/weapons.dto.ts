import { getParamsSchema, paginationSchema } from "@/utils/dto";
import { rarityType } from "@/utils/zod_types";
import { weaponSchema } from "@/wiki/admin/genshin/weapons/weapons.dto";
import { z } from "zod";

const getSchema = weaponSchema.omit({
  createdAt: true,
  updatedAt: true,
}).partial();

export {
  getSchema,
};