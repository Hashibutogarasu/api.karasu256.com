import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HI3SkillsEntity } from "./hi3_skills.entity";

@Entity('hi3_character_skills')
export class HI3CharacterSkillsEntity extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => HI3SkillsEntity, skill => skill.leader_skill, { nullable: true })
  leader_skill?: HI3SkillsEntity[] | null;

  @OneToMany(() => HI3SkillsEntity, skill => skill.passive_skill, { nullable: true })
  passive_skill?: HI3SkillsEntity[] | null;

  @OneToMany(() => HI3SkillsEntity, skill => skill.avoidance_skill, { nullable: true })
  avoidance_skill?: HI3SkillsEntity[] | null;

  @OneToMany(() => HI3SkillsEntity, skill => skill.weapon_skill, { nullable: true })
  weapon_skill?: HI3SkillsEntity[] | null;

  @OneToMany(() => HI3SkillsEntity, skill => skill.normal_attack, { nullable: true })
  normal_attack?: HI3SkillsEntity[] | null;

  @OneToMany(() => HI3SkillsEntity, skill => skill.ultimate_skill, { nullable: true })
  ultimate_skill?: HI3SkillsEntity[] | null;

  @OneToMany(() => HI3SkillsEntity, skill => skill.special_skill, { nullable: true })
  special_skill?: HI3SkillsEntity[] | null;
}