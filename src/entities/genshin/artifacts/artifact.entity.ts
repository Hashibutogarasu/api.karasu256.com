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
import { GenshinArtifactMainStat, GenshinArtifactPart } from "./artifact_type";
import { TranslationEntity } from "../translation.entity";
import { GenshinValueType } from "@/types/genshin/value_type";

@Entity("genshin_artifacts")
export class GenshinArtifactEntity extends BaseEntity {
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

  @Column({ type: "enum", enum: GenshinArtifactPart })
  @ApiProperty()
  part: GenshinArtifactPart;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStat: GenshinArtifactMainStat;

  @Column({ type: "enum", enum: GenshinValueType })
  @ApiProperty()
  mainStatValueType: GenshinValueType;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}
