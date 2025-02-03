import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Character } from "./character.entity";
import { Artifacts } from "./artifacts.entity";
import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { VersionsEntity } from "./versions.entity";

@Entity('artifact_sets')
export class ArtifactSets extends BaseEntity implements IBase {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  icon_url: string;

  @Column()
  one_set_effect: string;

  @Column()
  two_set_effect: string;

  @Column()
  four_set_effect: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Artifacts, artifact => artifact.artifact_sets)
  artifacts: Artifacts[];

  @ManyToMany(() => Character, character => character.artifact_set)
  characters: Character[];

  @OneToMany(() => VersionsEntity, version => version.artifact_sets)
  version: VersionsEntity;
}