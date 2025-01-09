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
import { GenshinArtifactMainStat, GenshinArtifactMainStatSchema, GenshinArtifactPart, GenshinArtifactPartSchema } from "../../../types/genshin/artifact_type";
import { GenshinValueType, GenshinValueTypeSchema } from "@/types/genshin/value_type";
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

  @Column({ type: "enum", enum: GenshinArtifactPartSchema })
  @ApiProperty()
  part: GenshinArtifactPart;

  @Column({ type: "enum", enum: GenshinArtifactMainStatSchema })
  @ApiProperty()
  mainStat: GenshinArtifactMainStat;

  @Column({ type: "enum", enum: GenshinValueTypeSchema })
  @ApiProperty()
  mainStatValueType: GenshinValueType;
};

