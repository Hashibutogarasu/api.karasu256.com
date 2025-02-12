import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { HI3Characters } from "./hi3_characters.entity";

@Entity('hi3_weapons')
export class HI3WeaponsEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  skill: string;

  @Column()
  type: string;

  @Column()
  icon_url: string;

  @Column()
  thumbnail_url: string;

  @Column()
  rarity: number;

  @Column()
  max_level: number;

  @Column()
  description: string;

  @Column()
  base_atk: number;

  @Column()
  crit: number;

  @ManyToMany(() => HI3Characters, character => character.stigmata, { nullable: true })
  @JoinTable({
    name: 'hi3_character_weapons',
    joinColumn: {
      name: 'weaponId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'weaponId',
      referencedColumnName: 'id',
    },
  })
  characters?: HI3Characters[] | null;
}