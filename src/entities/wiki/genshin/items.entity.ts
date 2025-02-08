import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { VersionsEntity } from "./versions.entity";

@Entity('items')
export class Items extends BaseEntity {
  released: boolean;
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => VersionsEntity, version => version.countries)
  version: VersionsEntity;
}