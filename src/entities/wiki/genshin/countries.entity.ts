import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GICharacter } from "./gi_character.entity";
import { VersionsEntity } from "./versions.entity";
import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { Transform } from 'class-transformer';

@Entity('countries')
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string | null;

  @Column({ nullable: true })
  sumbnail_url?: string | null;

  @OneToMany(() => GICharacter, character => character.region)
  characters: GICharacter[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => VersionsEntity, version => version.countries, { nullable: true })
  version?: VersionsEntity | null;
}