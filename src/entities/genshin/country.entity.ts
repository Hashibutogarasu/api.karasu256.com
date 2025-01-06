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
import { TranslationEntity } from "./translation.entity";

@Entity("genshin_countries")
export class GenshinCountryEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  backgroundDescription: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => GenshinCharacterEntity, (character) => character.id)
  character: GenshinCharacterEntity;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}
