import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Character } from "./character.entity";
import { BaseEntity as KBaseEntity } from "@karasu-lab/karasu-lab-sdk";
import { VersionEntity } from "./versions.entity";

@Entity('weapons')
export class Weapon extends BaseEntity implements KBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

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

  @OneToMany(() => VersionEntity, version => version.entities)
  version: VersionEntity;
}