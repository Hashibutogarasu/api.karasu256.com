import { createZodDto } from "nestjs-zod";
import { z } from "zod";

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