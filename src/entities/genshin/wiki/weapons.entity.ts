import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Character } from "./character.entity";
import { VersionsEntity } from "./versions.entity";
import { IBase } from "@karasu-lab/karasu-lab-sdk";

@Entity('weapons')
export class Weapon extends BaseEntity implements IBase {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  description?: string | undefined;

  @Column()
  icon_url: string;

  @Column()
  rarity: number;

  @Column()
  effect: string;

  @Column()
  type: string;

  @OneToMany(() => Character, character => character.weapon)
  characters: Character[];

  @OneToMany(() => VersionsEntity, version => version.weapons)
  version: VersionsEntity;
}