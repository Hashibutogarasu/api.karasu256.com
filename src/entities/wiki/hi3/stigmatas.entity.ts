import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { BaseEntity, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { HI3Characters } from "./hi3_characters.entity";

@Entity('stigmatas')
export class HI3StigmatasEntity extends BaseEntity implements IBase {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => HI3Characters, character => character.stigmata, { nullable: true })
  @JoinTable({
    name: 'hi3_character_stigmata',
    joinColumn: {
      name: 'stigmataId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'characterId',
      referencedColumnName: 'id',
    },
  })
  characters?: HI3Characters[] | null;
}
