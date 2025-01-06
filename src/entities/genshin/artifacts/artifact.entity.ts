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
  backgroundDescription: string;

  @Column({ type: "enum", enum: GenshinArtifactPart })
  @ApiProperty()
  part: GenshinArtifactPart;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStat: GenshinArtifactMainStat;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}
