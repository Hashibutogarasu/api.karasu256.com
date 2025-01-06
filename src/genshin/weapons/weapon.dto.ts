import { GenshinWeaponType } from "@/entities/genshin/weapon.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateWeaponDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  type: GenshinWeaponType;

  @ApiProperty()
  rarity: number;

  @ApiProperty()
  baseAttack: number;

  @ApiProperty()
  subStat: string;

  @ApiProperty()
  subStatValue: number;

  @ApiProperty()
  specialAbility: string;

  @ApiProperty()
  specialAbilityDescription: string;

  @ApiProperty()
  description: string;
}

export class UpdateWeaponDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name?: string | undefined;

  @ApiProperty()
  slug?: string | undefined;

  @ApiProperty()
  type?: GenshinWeaponType | undefined;

  @ApiProperty()
  rarity?: number | undefined;

  @ApiProperty()
  baseAttack?: number | undefined;

  @ApiProperty()
  subStat?: string | undefined;

  @ApiProperty()
  subStatValue?: number | undefined;

  @ApiProperty()
  specialAbility?: string | undefined;

  @ApiProperty()
  specialAbilityDescription?: string | undefined;

  @ApiProperty()
  description?: string | undefined;
}

export class DeleteWeaponDto {
  @ApiProperty()
  id: string;
}

export class GetWeaponDto {
  @ApiProperty()
  id: string;
}

export class GetWeaponsDto {
  @ApiProperty()
  page?: number = 1;

  @ApiProperty()
  limit?: number = 10;

  @ApiProperty()
  name?: string | undefined;
}

export class FindWeaponDto {
  @ApiProperty()
  id?: string | undefined;

  @ApiProperty()
  name?: string | undefined;

  @ApiProperty()
  type?: GenshinWeaponType | undefined;

  @ApiProperty()
  rarity?: number | undefined;

  @ApiProperty()
  baseAttack?: number | undefined;

  @ApiProperty()
  subStat?: string | undefined;

  @ApiProperty()
  page?: number = 1;

  @ApiProperty()
  limit?: number = 10;

  @ApiProperty()
  slug?: string | undefined;
}