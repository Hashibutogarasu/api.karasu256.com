import { BaseEntity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
}