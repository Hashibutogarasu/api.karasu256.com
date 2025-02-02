import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Character } from "./character.entity";
import { BaseEntity, Version } from "@karasu-lab/karasu-lab-sdk";

@Entity('weapons')
export class Weapon extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  version: Version;

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
}