import { SkillEntity } from "@/types/genshin/skill";
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

@Entity("genshin_charged_attacks")
export class GenshinChargedAttackEntity extends SkillEntity { }