import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { HI3StigmatasEntity } from "./hi3_stigmatas.entity";
import { HI3WeaponsEntity } from "./hi3_weapons.entity";
import { HI3SkillsEntity } from "./hi3_skills.entity";

/**
 * @author Hashibutogarasu
 * @class HI3Characters
 * @description 崩壊3rdのキャラクターのエンティティ
 */
@Entity('hi3_characters')
export class HI3Characters extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  sub_name?: string | null;

  @Column({ nullable: true })
  icon_url?: string | null;

  @Column({ nullable: true })
  thumbnail_url?: string | null;

  @Column({ nullable: true })
  description?: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => HI3SkillsEntity, skill => skill.characters, { eager: true, nullable: true, onDelete: 'CASCADE' })
  skills?: HI3SkillsEntity[] | null;

  @OneToMany(() => HI3StigmatasEntity, stigmata => stigmata.characters, { eager: true, nullable: true, onDelete: 'CASCADE' })
  stigmatas?: HI3StigmatasEntity[] | null;

  @OneToMany(() => HI3WeaponsEntity, weapon => weapon.characters, { eager: true, nullable: true, onDelete: 'CASCADE' })
  weapons?: HI3WeaponsEntity[] | null;
}
