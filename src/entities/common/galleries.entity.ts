import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GameCharacter } from "../wiki/game_character";

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

  @ManyToOne(() => GameCharacter, character => character.id, { nullable: true })
  character?: GameCharacter | null;
}