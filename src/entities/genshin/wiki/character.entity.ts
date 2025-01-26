import { IBaseEntity } from "@/types/baseentity";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Character extends BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  icon_url: string;

  @Column()
  element: string;

  @Column()
  country: string;

  @Column()
  rarity: number;

  @Column()
  version: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}