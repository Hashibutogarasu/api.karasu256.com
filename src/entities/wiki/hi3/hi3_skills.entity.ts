import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HI3Characters } from "./hi3_characters.entity";

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

  @ManyToOne(() => HI3Characters, skill => skill.skills, { nullable: true, orphanedRowAction: 'delete', onDelete: 'CASCADE' })
  characters?: HI3Characters | null;
}