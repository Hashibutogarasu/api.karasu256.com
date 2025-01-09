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

import { SkillEntity } from "@/types/genshin/skill";

@Entity("genshin_normal_attacks")
export class GenshinNormalAttackEntity extends SkillEntity { }
