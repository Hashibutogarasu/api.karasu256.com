import { ArtifactStat } from "@/types/genshin/artifact/stat/stat";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("genshin_artifact_main_stats")
export class GenshinArtifactMainStat extends ArtifactStat {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}

@Entity("genshin_artifact_sub_stats")
export class GenshinArtifactSubStat extends ArtifactStat {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}

@Entity("genshin_artifact_stat_value_types")
export class GenshinArtifactStatValueType extends ArtifactStat {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}