import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HI3CharacterSkillsEntity } from "./hi3_character_skills.entity";

@Entity('hi3_skills')
export class HI3SkillsEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name?: string | null;

  @Column({ nullable: true })
  description?: string | null;

  @Column({ nullable: true })
  type?: string | null;

  @Column({ nullable: true })
  max_level?: number | null;

  @Column({ nullable: true })
  icon_url?: string | null;

  @OneToMany(() => HI3SkillsEntity, skill => skill.id, { nullable: true })
  children?: HI3SkillsEntity[] | null;

  @ManyToOne(() => HI3CharacterSkillsEntity, skill => skill.leader_skill, { nullable: true })
  @JoinTable({
    name: 'leader_skill',
    joinColumn: {
      name: 'hi3_skillsId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'leader_skillId',
      referencedColumnName: 'id',
    },
  })
  leader_skill?: HI3CharacterSkillsEntity | null;

  @ManyToMany(() => HI3CharacterSkillsEntity, skill => skill.passive_skill, { nullable: true })
  @JoinTable({
    name: 'passive_skill',
    joinColumn: {
      name: 'hi3_skillsId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'passive_skillId',
      referencedColumnName: 'id',
    },
  })
  passive_skill: HI3CharacterSkillsEntity | null;

  @ManyToOne(() => HI3CharacterSkillsEntity, skill => skill.weapon_skill, { nullable: true })
  @JoinTable({
    name: 'weapon_skill',
    joinColumn: {
      name: 'hi3_skillsId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'avoidance_skillId',
      referencedColumnName: 'id',
    },
  })
  avoidance_skill: HI3CharacterSkillsEntity | null;

  @ManyToOne(() => HI3CharacterSkillsEntity, skill => skill.avoidance_skill, { nullable: true })
  @JoinTable({
    name: 'avoidance_skill',
    joinColumn: {
      name: 'hi3_skillsId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'weapon_skillId',
      referencedColumnName: 'id',
    },
  })
  weapon_skill?: HI3CharacterSkillsEntity | null;

  @ManyToOne(() => HI3CharacterSkillsEntity, skill => skill.normal_attack, { nullable: true })
  @JoinTable({
    name: 'normal_attack',
    joinColumn: {
      name: 'hi3_skillsId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'normal_attackId',
      referencedColumnName: 'id',
    },
  })
  normal_attack?: HI3CharacterSkillsEntity | null;

  @ManyToOne(() => HI3CharacterSkillsEntity, skill => skill.ultimate_skill, { nullable: true })
  @JoinTable({
    name: 'ultimate_skill',
    joinColumn: {
      name: 'hi3_skillsId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ultimate_skillId',
      referencedColumnName: 'id',
    },
  })
  ultimate_skill?: HI3CharacterSkillsEntity | null;

  @ManyToOne(() => HI3CharacterSkillsEntity, skill => skill.special_skill, { nullable: true })
  @JoinTable({
    name: 'special_skill',
    joinColumn: {
      name: 'hi3_skillsId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'special_skillId',
      referencedColumnName: 'id',
    },
  })
  special_skill?: HI3CharacterSkillsEntity | null;
}