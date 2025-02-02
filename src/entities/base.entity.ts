import { BaseEntity as KBaseEntity } from "@karasu-lab/karasu-lab-sdk";
import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { VersionEntity } from "./genshin/wiki/versions.entity";

@Entity()
export class BaseEntity extends KBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => VersionEntity, version => version.entities)
  version?: VersionEntity;
}