import { GenshinArtifactMainStat, GenshinArtifactSubStat } from "@/entities/genshin/artifacts/artifact_type";
import { ApiProperty } from "@nestjs/swagger";

export class FindArtifactSetsBySlugDto {
  @ApiProperty()
  slug: string;
}

export class CreateArtifactSetsDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  setCount: number;

  @ApiProperty()
  mainStatOfFlower: GenshinArtifactMainStat;

  @ApiProperty()
  mainStatOfPlume: GenshinArtifactMainStat;

  @ApiProperty()
  mainStatOfSands: GenshinArtifactMainStat;

  @ApiProperty()
  mainStatOfGoblet: GenshinArtifactMainStat;

  @ApiProperty()
  mainStatOfCirclet: GenshinArtifactMainStat;

  @ApiProperty()
  mainStatOfSubStats: GenshinArtifactSubStat[];
}

export class UpdateArtifactSetsDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name?: string | undefined;

  @ApiProperty()
  slug?: string | undefined;

  @ApiProperty()
  description?: string | undefined;

  @ApiProperty()
  setCount?: number | undefined;

  @ApiProperty()
  mainStatOfFlower?: GenshinArtifactMainStat | undefined;

  @ApiProperty()
  mainStatOfPlume?: GenshinArtifactMainStat | undefined;

  @ApiProperty()
  mainStatOfSands?: GenshinArtifactMainStat | undefined;

  @ApiProperty()
  mainStatOfGoblet?: GenshinArtifactMainStat | undefined;

  @ApiProperty()
  mainStatOfCirclet?: GenshinArtifactMainStat | undefined;

  @ApiProperty()
  mainStatOfSubStats?: GenshinArtifactSubStat[] | undefined;
}

export class DeleteArtifactSetsDto {
  @ApiProperty()
  id: string;
}