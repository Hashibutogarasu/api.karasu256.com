import { z } from "zod";

const rarityType = z.number().int().min(1).max(5);

const url = z.string().url({ message: 'urlはurlである必要があります' });


export { rarityType, url }