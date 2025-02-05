import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GICharacter } from "../wiki/genshin/gi_character.entity";
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

  @ManyToOne(() => GICharacter, character => character.id, { nullable: true })
  character?: GICharacter | null;
}