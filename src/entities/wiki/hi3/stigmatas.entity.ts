import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { BaseEntity, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { HI3Characters } from "./hi3_characters.entity";

@Entity('stigmatas')
export class HI3StigmatasEntity extends BaseEntity implements IBase {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => HI3Characters, character => character.stigmata)
  characters: HI3Characters[];
}
