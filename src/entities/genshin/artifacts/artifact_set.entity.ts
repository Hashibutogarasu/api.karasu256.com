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
import { GenshinArtifactSubStat } from "../../../types/genshin/artifact_type";
import { GenshinEntity } from "@/types/genshin/genshin";

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

  @Column({ type: "varchar", array: true })
  @ApiProperty()
  artifactIds: string[];

  @Column({ type: "enum", enum: GenshinArtifactSubStat, array: true, default: "{}" })
  @ApiProperty()
  recommendedSubStats?: GenshinArtifactSubStat[];

  @Column({ type: "varchar", array: true, default: "{}" })
  @ApiProperty()
  recommendedCharacterIds: string[];

  @ManyToMany(() => GenshinArtifactEntity, (artifact) => artifact.id)
  artifacts: GenshinArtifactEntity[];
}
