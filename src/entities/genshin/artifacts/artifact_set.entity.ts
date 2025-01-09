import { ApiProperty } from "@nestjs/swagger";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { GenshinArtifactEntity } from "./artifact.entity";
import { GenshinEntity } from "@/types/genshin/genshin";
import { GenshinArtifactMainStat, GenshinArtifactSubStat } from "./stat.entity";
import { GenshinCharacterEntity } from "../character.entity";

@Entity("genshin_artifact_sets")
export class GenshinArtifactSetEntity extends GenshinEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  slug: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  description: string;

  @OneToMany(() => GenshinCharacterEntity, (character) => character.slug)
  characters?: GenshinCharacterEntity[] | undefined;

  @OneToMany(() => GenshinArtifactMainStat, (subStat) => subStat.slug)
  mainStats?: GenshinArtifactMainStat[] | undefined;

  @OneToMany(() => GenshinArtifactSubStat, (subStat) => subStat.slug)
  recommendedSubStats?: GenshinArtifactSubStat[] | undefined;

  @OneToMany(() => GenshinArtifactEntity, (artifact) => artifact.slug)
  artifacts: GenshinArtifactEntity[] | undefined;
}
