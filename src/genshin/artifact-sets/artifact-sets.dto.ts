import { GenshinArtifactSubStat } from "@/types/genshin/artifact_type";

export class FindArtifactSetsBySlugDto {
  slug: string;
};

export class FindArtifactSetsDto {
  id?: string | undefined;
  name?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
  artifactIds?: string[] | undefined;
  recommendedSubStats?: GenshinArtifactSubStat[] | undefined;
  recommendedCharacterIds?: string[] | undefined;
};

export class CreateArtifactSetsDto {
  name: string;
  slug: string;
  description: string;
  artifactIds: string[];
  recommendedSubStats?: GenshinArtifactSubStat[] | undefined;
  recommendedCharacterIds?: string[] | undefined;
};

export class UpdateArtifactSetsDto {
  id: string;
  name?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
  artifactIds?: string[] | undefined;
  recommendedSubStats?: GenshinArtifactSubStat[] | undefined;
  recommendedCharacterIds?: string[] | undefined;
};

export class DeleteArtifactSetsDto {
  id: string;
};
