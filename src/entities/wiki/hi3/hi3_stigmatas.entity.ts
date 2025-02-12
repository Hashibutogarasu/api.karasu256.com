import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { HI3Characters } from "./hi3_characters.entity";

@Entity('hi3_stigmatas')
export class HI3StigmatasEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name?: string | null;

  @Column({ nullable: true })
  description?: string | null;

  @Column({ nullable: true })
  skill?: string | null;

  @Column({ nullable: true })
  type?: string | null;

  @Column({ nullable: true })
  two_set_skill?: string | null;

  @Column({ nullable: true })
  three_set_skill?: string | null;

  @Column({ nullable: true })
  max_level?: number | null;

  @Column({ nullable: true })
  icon_url?: string | null;

  @Column({ nullable: true })
  thumbnail_url?: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => HI3Characters, character => character.stigmatas, { nullable: true, orphanedRowAction: 'delete' })
  characters?: HI3Characters | null;
}
