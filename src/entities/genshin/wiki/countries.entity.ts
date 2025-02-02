import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Character } from "./character.entity";
import { BaseEntity as KBaseEntity } from "@karasu-lab/karasu-lab-sdk";

@Entity('countries')
export class Country extends BaseEntity implements KBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string | undefined;

  @Column({ nullable: true })
  sumbnail_url?: string | undefined;

  @Column({ nullable: true })
  version: string | undefined;

  @OneToMany(() => Character, character => character.country)
  characters: Character[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}