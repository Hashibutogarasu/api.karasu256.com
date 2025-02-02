import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Character } from "./character.entity";
import { Artifacts } from "./artifacts.entity";
import { BaseEntity as KBaseEntity } from "@karasu-lab/karasu-lab-sdk";

@Entity('artifact_sets')
export class ArtifactSets extends BaseEntity implements KBaseEntity {
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
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToMany(() => Artifacts, artifact => artifact.artifact_sets)
  artifacts: Artifacts[];

  @ManyToMany(() => Character, character => character.artifact_set)
  characters: Character[];
}