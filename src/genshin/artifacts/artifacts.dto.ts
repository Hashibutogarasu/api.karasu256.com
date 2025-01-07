import { GenshinArtifactMainStat, GenshinArtifactPart } from "@/entities/genshin/artifacts/artifact_type";
import { GenshinValueType } from "@/types/genshin/value_type";
import { ApiProperty } from "@nestjs/swagger";

export class FindArtifactBySlugDto {
  @ApiProperty()
  slug: string;
}

export class DeleteArtifactDto {
  @ApiProperty()
  id: string;
}

export class CreateArtifactDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  part: GenshinArtifactPart;

  @ApiProperty()
  mainStat: GenshinArtifactMainStat;

  @ApiProperty()
  mainStatValueType: GenshinValueType;
}

export class UpdateArtifactDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name?: string | undefined;

  @ApiProperty()
  slug?: string | undefined;

  @ApiProperty()
  description?: string | undefined;

  @ApiProperty()
  part?: string | undefined;

  @ApiProperty()
  mainStat?: string | undefined;

  @ApiProperty()
  mainStatValueType: GenshinValueType | undefined;
}