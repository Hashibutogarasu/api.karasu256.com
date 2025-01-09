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
import { GenshinArtifactSetEntity } from "./artifacts/artifact_set.entity";
import { GenshinValueType } from "@/types/genshin/value_type";
import { GenshinEntity } from "@/types/genshin/genshin";
import { z } from "zod";

export const GenshinWeaponTypeSchema = z.nativeEnum({
  sword: "sword",
  claymore: "claymore",
  bow: "bow",
  catalyst: "catalyst",
  polearm: "polearm",
});

export type GenshinWeaponType = z.infer<typeof GenshinWeaponTypeSchema>;

@Entity("genshin_weapons")
export class GenshinWeaponEntity extends GenshinEntity {
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

  @Column({ type: "enum", enum: GenshinWeaponTypeSchema })
  @ApiProperty()
  type: GenshinWeaponType;

  @Column({ type: "int", default: 1 })
  @ApiProperty()
  rarity: number = 1;

  @Column({ type: "int" })
  @ApiProperty()
  baseAttack: number;

  @Column({ type: "varchar", nullable: true })
  @ApiProperty()
  subStat?: string | undefined;

  @Column({ type: "int", nullable: true })
  @ApiProperty()
  subStatValue?: number | undefined;

  @Column({ type: "varchar" })
  @ApiProperty()
  subStatValueType: GenshinValueType;

  @Column({ type: "varchar", nullable: true })
  @ApiProperty()
  specialAbility?: string | undefined;

  @Column({ type: "varchar", nullable: true })
  @ApiProperty()
  specialAbilityDescription?: string | undefined;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => GenshinCharacterEntity, (character) => character.id)
  character: GenshinCharacterEntity;

  @ManyToMany(() => GenshinArtifactSetEntity, (artifactSet) => artifactSet.id)
  artifactSet: GenshinArtifactSetEntity;
}
