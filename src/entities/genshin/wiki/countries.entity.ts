import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Character } from "./character.entity";
import { VersionsEntity } from "./versions.entity";
import { IBase } from "@karasu-lab/karasu-lab-sdk";

@Entity('countries')
export class Country extends BaseEntity implements IBase {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string | null;

  @Column({ nullable: true })
  sumbnail_url?: string | null;

  @OneToMany(() => Character, character => character.region)
  characters: Character[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => VersionsEntity, version => version.countries)
  version: VersionsEntity;
}