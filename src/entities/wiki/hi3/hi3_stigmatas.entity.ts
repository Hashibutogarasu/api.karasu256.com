import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { HI3Characters } from "./hi3_characters.entity";

@Entity('stigmatas')
export class HI3StigmatasEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  skill: string;

  @Column()
  type: string;

  @Column()
  two_set_skill: string;

  @Column()
  three_set_skill: string;

  @Column()
  max_level: number;

  @Column()
  icon_url: string;

  @Column()
  thumbnail_url: string;

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
