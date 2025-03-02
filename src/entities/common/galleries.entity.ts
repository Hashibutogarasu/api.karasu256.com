import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GICharacter } from "../wiki/genshin/gi_character.entity";
import { IBase } from "@karasu-lab/karasu-lab-sdk";

@Entity('galleries')
export class Gallery extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  alt?: string | null;

  @Column({ nullable: true })
  url?: string | null;

  @Column({ nullable: true })
  key?: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => GICharacter, character => character.id, { nullable: true })
  character?: GICharacter | null;
}