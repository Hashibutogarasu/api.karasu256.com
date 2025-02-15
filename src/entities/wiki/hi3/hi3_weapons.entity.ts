import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { HI3Characters } from "./hi3_characters.entity";

@Entity('hi3_weapons')
export class HI3WeaponsEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name?: string | null;

  @Column({ nullable: true })
  skill?: string | null;

  @Column({ nullable: true })
  type?: string | null;

  @Column({ nullable: true })
  icon_url?: string | null;

  @Column({ nullable: true })
  thumbnail_url?: string | null;

  @Column({ nullable: true })
  rarity?: number | null;

  @Column({ nullable: true })
  max_level?: number | null;

  @Column({ nullable: true })
  description?: string | null;

  @Column({ nullable: true })
  base_atk?: number | null;

  @Column({ nullable: true })
  crit?: number | null;

  @ManyToOne(() => HI3Characters, character => character.weapons, { nullable: true, orphanedRowAction: 'delete', onDelete: 'CASCADE' })
  characters?: HI3Characters | null;
}