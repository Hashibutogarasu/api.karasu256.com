import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const GetEntryPageListSchema = z.object({
  filters: z.array(z.any()).default([]),
  menu_id: z.string().default("2"),
  page_num: z.number().default(1),
  page_size: z.number().default(30),
  use_es: z.boolean().default(true),
});

export class GetEntryPageListDto extends createZodDto(GetEntryPageListSchema) { }

export const GerCharacterInfoSchema = z.object({
  entry_page_id: z.string(),
});

export class GetCharacterInfoDto extends createZodDto(GerCharacterInfoSchema) { }

export const GetCharacterInfoByNameSchema = z.object({
  name: z.string(),
});

export class GetCharacterInfoByNameDto extends createZodDto(GetCharacterInfoByNameSchema) { }

export const SaveCharacterSchema = z.object({
  limit: z.string(),
  page: z.string(),
});

export class SaveCharacterDto extends createZodDto(SaveCharacterSchema) { }