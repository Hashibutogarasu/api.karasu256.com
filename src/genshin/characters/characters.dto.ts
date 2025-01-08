import { GenshinElementEntity } from "@/entities/genshin/element.entity";
import { GenshinWeaponType } from "@/entities/genshin/weapon.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCharacterDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  weaponType: GenshinWeaponType;

  @ApiProperty()
  element: string;

  @ApiProperty()
  rarity: number;

  @ApiProperty()
  image?: string | undefined;

  @ApiProperty()
  countryId: string;
}

export class UpdateCharacterDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name?: string | undefined;

  @ApiProperty()
  slug?: string | undefined;

  @ApiProperty()
  description?: string | undefined;

  @ApiProperty()
  weaponType?: GenshinWeaponType | undefined;

  @ApiProperty()
  element?: string | undefined;

  @ApiProperty()
  rarity?: number | undefined;

  @ApiProperty()
  image?: string | undefined;

  @ApiProperty()
  countryId?: string | undefined;
}

export class DeleteCharacterDto {
  @ApiProperty()
  id: string;
};

export class GetCharacterDto {
  @ApiProperty()
  id: string;
};

export class GetCharactersDto {
  @ApiProperty()
  id?: string | undefined;

  @ApiProperty()
  page?: number = 1;

  @ApiProperty()
  limit?: number = 10;

  @ApiProperty()
  name?: string | undefined;

  @ApiProperty()
  slug?: string | undefined;

  @ApiProperty()
  rarity?: number | undefined;

  @ApiProperty()
  image?: string | undefined;

  @ApiProperty()
  weaponType: GenshinWeaponType | undefined;

  @ApiProperty()
  countryId?: string | undefined;
};

export class GetCharactersByElementSlugDto {
  @ApiProperty()
  element: string;

  @ApiProperty()
  page?: number = 1;

  @ApiProperty()
  limit?: number = 10;
}

export class FindCharacterDto {
  @ApiProperty()
  id?: string | undefined;

  @ApiProperty()
  name?: string | undefined;

  @ApiProperty()
  slug?: string | undefined;

  @ApiProperty()
  element?: string | undefined;

  @ApiProperty()
  rarity?: number | undefined;

  @ApiProperty()
  image?: string | undefined;

  @ApiProperty()
  weaponType: GenshinWeaponType | undefined;

  @ApiProperty()
  countryId?: string | undefined;
};