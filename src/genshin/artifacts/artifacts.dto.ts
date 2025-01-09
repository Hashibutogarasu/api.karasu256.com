import { GenshinArtifactMainStat, GenshinArtifactPart } from "@/types/genshin/artifact_type";
import { GenshinValueType } from "@/types/genshin/value_type";

export class FindArtifactBySlugDto {
  slug: string;
};

export class DeleteArtifactDto {
  id: string;
};

export class CreateArtifactDto {
  name: string;
  slug: string;
  description: string;
  part: GenshinArtifactPart;
  mainStat: GenshinArtifactMainStat;
  mainStatValueType: GenshinValueType;
};

export class UpdateArtifactDto {
  id: string;
  name?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
  part?: string | undefined;
  mainStat?: string | undefined;
  mainStatValueType: GenshinValueType | undefined;
};
