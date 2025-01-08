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
import { GenshinArtifactMainStat, GenshinArtifactPart } from "../../../types/genshin/artifact_type";
import { GenshinValueType } from "@/types/genshin/value_type";
import { GenshinEntity } from "@/types/genshin/genshin";

@Entity("genshin_artifacts")
export class GenshinArtifactEntity extends GenshinEntity {
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
};

