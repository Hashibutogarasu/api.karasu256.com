import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Character } from "../genshin/wiki/character.entity";
import { BaseEntity as KBaseEntity } from "@karasu-lab/karasu-lab-sdk";

@Entity('galleries')
export class Gallery extends BaseEntity implements KBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  alt: string;

  @Column()
  url: string;

  @Column()
  key: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Character, character => character.id, { nullable: true })
  character?: Character | null;
}