import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GICharacter } from "./gi_character.entity";
import { VersionsEntity } from "./versions.entity";
import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { Transform } from 'class-transformer';

@Entity('weapons')
export class Weapon extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  @Transform(({ value }) => (value).toString())
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  description?: string | null;

  @Column()
  icon_url: string;

  @Column()
  rarity: number;

  @Column()
  effect: string;

  @Column()
  type: string;

  @OneToMany(() => GICharacter, character => character.weapon)
  characters: GICharacter[];

  @OneToMany(() => VersionsEntity, version => version.weapons)
  version: VersionsEntity;
}