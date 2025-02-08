import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { VersionsEntity } from "./versions.entity";
import { Transform } from 'class-transformer';

@Entity('items')
export class Items extends BaseEntity {
  released: boolean;
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => VersionsEntity, version => version.countries)
  version: VersionsEntity;
}