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
  name?: string;

  @ApiProperty()
  slug?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  weaponType?: GenshinWeaponType;

  @ApiProperty()
  elementId?: string;

  @ApiProperty()
  weaponId?: string;

  @ApiProperty()
  countryId?: string;

  @ApiProperty()
  artifactSetIds?: string[];
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
  page?: number;

  @ApiProperty()
  limit?: number;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  elementId?: string;

  @ApiProperty()
  weaponType: GenshinWeaponType;

  @ApiProperty()
  weaponId?: string;

  @ApiProperty()
  countryId?: string;

  @ApiProperty()
  artifactSetIds?: string[];
};

export class FindCharacterDto {
  @ApiProperty()
  id?: string | undefined;

  @ApiProperty()
  name?: string | undefined;

  @ApiProperty()
  slug?: string | undefined;

  @ApiProperty()
  elementId?: string;

  @ApiProperty()
  weaponType: GenshinWeaponType;

  @ApiProperty()
  weaponId?: string;

  @ApiProperty()
  countryId?: string;

  @ApiProperty()
  artifactSetIds?: string[];
};