import { GenshinWeaponType } from "@/entities/genshin/weapon.entity";
import { GenshinValueType } from "@/types/genshin/value_type";

export class CreateWeaponDto {
  name: string;
  slug: string;
  type: GenshinWeaponType;
  rarity: number;
  baseAttack: number;
  subStat: string;
  subStatValue: number;
  subStatType: GenshinValueType;
  specialAbility: string;
  specialAbilityDescription: string;
  description: string;
};

export class UpdateWeaponDto {
  id: string;
  name?: string | undefined;
  slug?: string | undefined;
  type?: GenshinWeaponType | undefined;
  rarity?: number | undefined;
  baseAttack?: number | undefined;
  subStat?: string | undefined;
  subStatValue?: number | undefined;
  specialAbility?: string | undefined;
  specialAbilityDescription?: string | undefined;
  description?: string | undefined;
};

export class DeleteWeaponDto {
  id: string;
};

export class GetWeaponDto {
  id: string;
};

export class GetWeaponsDto {
  page?: number = 1;
  limit?: number = 10;
  name?: string | undefined;
};

export class FindWeaponDto {
  id?: string | undefined;
  name?: string | undefined;
  type?: GenshinWeaponType | undefined;
  rarity?: number | undefined;
  baseAttack?: number | undefined;
  subStat?: string | undefined;
  page?: number = 1;
  limit?: number = 10;
  slug?: string | undefined;
};

export class FindWeaponBySlugDto {
  slug: string;
};
