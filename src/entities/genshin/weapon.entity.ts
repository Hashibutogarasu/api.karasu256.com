import { ApiProperty } from "@nestjs/swagger";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { GenshinEntity } from "@/types/genshin/genshin";
import { z } from "zod";

@Entity("genshin_weapons")
export class GenshinWeaponEntity extends GenshinEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  slug: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  type: string;

  @Column({ type: "int", default: 1 })
  rarity: number = 1;

  @Column({ type: "int" })
  baseAttack: number;

  @Column({ type: "varchar", nullable: true })
  subStat?: string | undefined;

  @Column({ type: "int", nullable: true })
  subStatValue?: number | undefined;

  @Column({ type: "varchar", nullable: true })
  specialAbility?: string | undefined;

  @Column({ type: "varchar", nullable: true })
  specialAbilityDescription?: string | undefined;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

}