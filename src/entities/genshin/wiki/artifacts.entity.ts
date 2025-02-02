import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ArtifactSets } from "./artifact-sets.entity";
import { BaseEntity as KBaseEntity } from "@karasu-lab/karasu-lab-sdk";

@Entity('artifacts')
export class Artifacts extends BaseEntity implements KBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  icon_url: string;

  @Column()
  version: string;

  @ManyToMany(() => ArtifactSets, artifactSet => artifactSet.artifacts)
  artifact_sets: ArtifactSets[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}