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
  artifactIds: string[];

  @ApiProperty()
  recommendedSubStats?: GenshinArtifactSubStat[] | undefined;

  @ApiProperty()
  recommendedCharacterIds?: string[] | undefined;
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
  artifactIds?: string[] | undefined;

  @ApiProperty()
  recommendedSubStats?: GenshinArtifactSubStat[] | undefined;

  @ApiProperty()
  recommendedCharacterIds?: string[] | undefined;
}

export class DeleteArtifactSetsDto {
  @ApiProperty()
  id: string;
}