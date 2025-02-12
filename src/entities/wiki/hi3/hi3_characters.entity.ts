import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { HI3StigmatasEntity } from "./hi3_stigmatas.entity";
import { HI3WeaponsEntity } from "./hi3_weapons.entity";
import { HI3CharacterSkillsEntity } from "./hi3_character_skills.entity";

@Entity('hi3_characters')
export class HI3Characters extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  sub_name?: string | null;

  @Column({ nullable: true })
  description?: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => HI3CharacterSkillsEntity, skill => skill.characters, { eager: true, nullable: true })
  @JoinColumn({ name: 'skillId' })
  skill?: HI3CharacterSkillsEntity | null;

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

  @ManyToMany(() => HI3WeaponsEntity, weapon => weapon.characters, { eager: true, nullable: true })
  @JoinTable({
    name: 'hi3_character_weapon',
    joinColumn: {
      name: 'characterId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'weaponId',
      referencedColumnName: 'id',
    },
  })
  weapons?: HI3WeaponsEntity[] | null;
}
