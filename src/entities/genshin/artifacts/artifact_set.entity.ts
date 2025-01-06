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
import { GenshinArtifactMainStat, GenshinArtifactSubStat } from "./artifact_type";
import { TranslationEntity } from "../translation.entity";

@Entity("genshin_artifact_sets")
export class GenshinArtifactSetEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  description: string;

  @Column({ type: "int" })
  @ApiProperty()
  setCount: number;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStatOfFlower: GenshinArtifactMainStat;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStatOfPlume: GenshinArtifactMainStat;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStatOfSands: GenshinArtifactMainStat;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStatOfGoblet: GenshinArtifactMainStat;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStatOfCirclet: GenshinArtifactMainStat;

  @Column({ type: "enum", enum: GenshinArtifactSubStat, array: true })
  @ApiProperty()
  recommendedSubStats: GenshinArtifactSubStat[];

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToMany(() => GenshinArtifactEntity, (artifact) => artifact.id)
  artifacts: GenshinArtifactEntity[];

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}
