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
  slug: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  description: string;

  @Column({ type: "int" })
  @ApiProperty()
  setCount: number;

  @Column({ type: "enum", enum: GenshinArtifactMainStat, nullable: true })
  @ApiProperty()
  mainStatOfFlower?: GenshinArtifactMainStat | undefined;

  @Column({ type: "enum", enum: GenshinArtifactMainStat, nullable: true })
  @ApiProperty()
  mainStatOfPlume?: GenshinArtifactMainStat | undefined;

  @Column({ type: "enum", enum: GenshinArtifactMainStat, nullable: true })
  @ApiProperty()
  mainStatOfSands?: GenshinArtifactMainStat | undefined;

  @Column({ type: "enum", enum: GenshinArtifactMainStat, nullable: true })
  @ApiProperty()
  mainStatOfGoblet?: GenshinArtifactMainStat | undefined;

  @Column({ type: "enum", enum: GenshinArtifactMainStat, nullable: true })
  @ApiProperty()
  mainStatOfCirclet?: GenshinArtifactMainStat | undefined;

  @Column({ type: "enum", enum: GenshinArtifactSubStat, array: true, nullable: true })
  @ApiProperty()
  recommendedSubStats?: GenshinArtifactSubStat[] | undefined;

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
