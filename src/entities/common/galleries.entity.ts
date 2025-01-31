import { IBaseEntity } from "@/types/baseentity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Character } from "../genshin/wiki/character.entity";

@Entity('galleries')
export class Gallery extends BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

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