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
import { TranslationEntity } from "./translation.entity";

@Entity("genshin_elements")
export class GenshinElementEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  slug: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => GenshinCharacterEntity, (character) => character.id)
  character: GenshinCharacterEntity;

  @ManyToOne(() => GenshinWeaponEntity, (weapon) => weapon.id)
  weapon: GenshinWeaponEntity;

  @ManyToMany(() => GenshinArtifactSetEntity, (artifactSet) => artifactSet.id)
  artifactSet: GenshinArtifactSetEntity;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}