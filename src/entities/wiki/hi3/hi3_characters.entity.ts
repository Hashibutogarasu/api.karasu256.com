import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { HI3StigmatasEntity } from "./stigmatas.entity";

@Entity('hi3_characters')
export class HI3Characters extends BaseEntity implements IBase {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  sub_name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => HI3StigmatasEntity, stigmata => stigmata.characters, { eager: true, nullable: true })
  @JoinTable({
    name: 'hi3_character_stigmata',
    joinColumn: {
      name: 'characterId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'stigmataId',
      referencedColumnName: 'id',
    },
  })
  stigmata?: HI3StigmatasEntity[] | null;
}
