import { GenshinWeaponType } from "@/entities/genshin/weapon.entity";

export class CreateCharacterDto {
  name: string;
  slug: string;
  description: string;
  weaponType: GenshinWeaponType;
  element: string;
  rarity: number;
  image?: string | undefined;
  countryId: string;
};

export class UpdateCharacterDto {
  id: string;
  name?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
  weaponType?: GenshinWeaponType | undefined;
  element?: string | undefined;
  rarity?: number | undefined;
  image?: string | undefined;
  countryId?: string | undefined;
};

export class DeleteCharacterDto {
  id: string;
};

export class GetCharacterDto {
  id: string;
};

export class GetCharactersDto {
  id?: string | undefined;
  page?: number = 1;
  limit?: number = 10;
  name?: string | undefined;
  slug?: string | undefined;
  rarity?: number | undefined;
  image?: string | undefined;
  weaponType: GenshinWeaponType | undefined;
  countryId?: string | undefined;
};

export class GetCharactersByElementSlugDto {
  element: string;
  page?: number = 1;
  limit?: number = 10;
};

export class FindCharacterDto {
  id?: string | undefined;
  name?: string | undefined;
  slug?: string | undefined;
  element?: string | undefined;
  rarity?: number | undefined;
  image?: string | undefined;
  weaponType: GenshinWeaponType | undefined;
  countryId?: string | undefined;
};
