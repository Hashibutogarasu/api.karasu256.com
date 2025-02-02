import { BaseEntity as KBaseEntity } from "@karasu-lab/karasu-lab-sdk";
import { CreateDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BaseEntity as TBaseEntity } from "typeorm";

export class BaseEntity extends TBaseEntity implements KBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}