import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const CreateWeaponDtoSchema = z.object({
  name: z.string(),
  slug: z.string(),
  type: z.string().default("sword"),
  rarity: z.number(),
  baseAttack: z.number(),
  subStat: z.string(),
  subStatValue: z.number(),
  subStatType: z.string().default("number"),
  specialAbility: z.string(),
  specialAbilityDescription: z.string(),
  description: z.string(),
});

export class CreateWeaponDto extends createZodDto(CreateWeaponDtoSchema) { }

export const UpdateWeaponDtoSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  slug: z.string().optional(),
  type: z.string().optional(),
  rarity: z.number().optional(),
  baseAttack: z.number().optional(),
  subStat: z.string().optional(),
  subStatValue: z.number().optional(),
  specialAbility: z.string().optional(),
  specialAbilityDescription: z.string().optional(),
  description: z.string().optional(),
});

export class UpdateWeaponDto extends createZodDto(UpdateWeaponDtoSchema) { }

export const DeleteWeaponDtoSchema = z.object({
  id: z.string(),
});

export class DeleteWeaponDto extends createZodDto(DeleteWeaponDtoSchema) { }

export const GetWeaponDtoSchema = z.object({
  id: z.string(),
});

export class GetWeaponDto extends createZodDto(GetWeaponDtoSchema) { }

export const GetWeaponsDtoSchema = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
  name: z.string().optional(),
});

export class GetWeaponsDto extends createZodDto(GetWeaponsDtoSchema) { }

export const FindWeaponDtoSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  type: z.string().optional(),
  rarity: z.number().optional(),
  baseAttack: z.number().optional(),
  subStat: z.string().optional(),
  page: z.number().optional().default(1),
  limit: z.number().optional().default(10),
  slug: z.string().optional(),
});

export class FindWeaponDto extends createZodDto(FindWeaponDtoSchema) { }

export const FindWeaponBySlugDtoSchema = z.object({
  slug: z.string(),
});

export class FindWeaponBySlugDto extends createZodDto(FindWeaponBySlugDtoSchema) { }
