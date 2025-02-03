import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Character } from "../genshin/wiki/character.entity";
import { IBase } from "@karasu-lab/karasu-lab-sdk";

@Entity('galleries')
export class Gallery extends BaseEntity implements IBase {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  alt: string;

  @Column()
  url: string;

  @Column()
  key: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Character, character => character.id, { nullable: true })
  character?: Character | null;
}