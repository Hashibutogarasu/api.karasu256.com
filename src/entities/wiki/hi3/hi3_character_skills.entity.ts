import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HI3SkillsEntity } from "./hi3_skills.entity";

@Entity('hi3_character_skills')
export class HI3CharacterSkillsEntity extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => HI3SkillsEntity, skill => skill.id, { nullable: true })
  skills?: HI3SkillsEntity[] | null;
}