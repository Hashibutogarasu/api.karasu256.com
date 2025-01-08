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
  elementId: string;

  @ApiProperty()
  rarity: number;

  @ApiProperty()
  image?: string | undefined;

  @ApiProperty()
  weaponId: string;

  @ApiProperty()
  countryId: string;

  @ApiProperty()
  artifactSetIds: string[];
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
  elementId?: string | undefined;

  @ApiProperty()
  rarity?: number | undefined;

  @ApiProperty()
  image?: string | undefined;

  @ApiProperty()
  weaponId?: string | undefined;

  @ApiProperty()
  countryId?: string | undefined;

  @ApiProperty()
  artifactSetIds?: string[] | undefined;
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
  elementId?: string | undefined;

  @ApiProperty()
  rarity?: number | undefined;

  @ApiProperty()
  image?: string | undefined;

  @ApiProperty()
  weaponType: GenshinWeaponType | undefined;

  @ApiProperty()
  weaponId?: string | undefined;

  @ApiProperty()
  countryId?: string | undefined;

  @ApiProperty()
  artifactSetIds?: string[] | undefined;
};

export class FindCharacterDto {
  @ApiProperty()
  id?: string | undefined;

  @ApiProperty()
  name?: string | undefined;

  @ApiProperty()
  slug?: string | undefined;

  @ApiProperty()
  elementId?: string | undefined;

  @ApiProperty()
  weaponType: GenshinWeaponType | undefined;

  @ApiProperty()
  weaponId?: string | undefined;

  @ApiProperty()
  countryId?: string | undefined;

  @ApiProperty()
  artifactSetIds?: string[] | undefined;
};