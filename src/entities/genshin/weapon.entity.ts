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
import { TranslationEntity } from "./translation.entity";

enum GenshinWeaponType {
  // 片手剣
  SWORD = "sword",
  // 両手剣
  CLAYMORE = "claymore",
  // 弓
  BOW = "bow",
  // 法器
  CATALYST = "catalyst",
  // 長柄武器
  POLEARM = "polearm",
}

@Entity("genshin_weapons")
export class GenshinWeaponEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  backgroundDescription: string;

  @Column({ type: "enum", enum: GenshinWeaponType })
  @ApiProperty()
  type: GenshinWeaponType;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => GenshinCharacterEntity, (character) => character.id)
  character: GenshinCharacterEntity;

  @Column({ type: "enum", enum: GenshinWeaponType })
  @ApiProperty()
  weaponType: GenshinWeaponType;

  @ManyToMany(() => GenshinArtifactSetEntity, (artifactSet) => artifactSet.id)
  artifactSet: GenshinArtifactSetEntity;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}
