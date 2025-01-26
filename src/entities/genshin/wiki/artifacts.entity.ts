import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArtifactSets } from "./artifact-sets.entity";

@Entity('artifacts')
export class Artifacts extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

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

  @Column()
  version: string;

  @ManyToMany(() => ArtifactSets, artifactSet => artifactSet.artifacts)
  artifact_sets: ArtifactSets[];
}