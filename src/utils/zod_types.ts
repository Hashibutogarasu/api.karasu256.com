import { z } from "zod";

const rarityType = z.number().int().min(1).max(5);

export { rarityType }