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

@Entity("genshin_special_skills")
export class GenshinSpecialSkillEntity extends SkillEntity { }
