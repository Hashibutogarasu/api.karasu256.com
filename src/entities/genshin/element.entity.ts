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
import { GenshinCharacterEntity } from "./character.entity";
import { GenshinWeaponEntity } from "./weapon.entity";
import { GenshinArtifactSetEntity } from "./artifacts/artifact_set.entity";
import { GenshinEntity } from "@/types/genshin/genshin";

@Entity("genshin_elements")
export class GenshinElementEntity extends GenshinEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  slug: string;
}