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
import { GenshinArtifactMainStatSchema, GenshinArtifactPart, GenshinArtifactPartSchema } from "../../../types/genshin/artifact/artifact_type";
import { GenshinEntity } from "@/types/genshin/genshin";
import { GenshinArtifactMainStat } from "./stat.entity";

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

  @Column({ type: "varchar" })
  @ApiProperty()
  part: GenshinArtifactPart;

  @ManyToOne(() => GenshinArtifactMainStat, (mainStat) => mainStat.slug)
  mainStat: GenshinArtifactMainStat;

  @ManyToMany(() => GenshinArtifactMainStat, (subStat) => subStat.slug)
  subStats: GenshinArtifactMainStat[];
};

