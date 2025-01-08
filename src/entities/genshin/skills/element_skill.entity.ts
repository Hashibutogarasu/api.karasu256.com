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

@Entity("genshin_element_skills")
export class GenshinElementSkillEntity extends SkillEntity { }
