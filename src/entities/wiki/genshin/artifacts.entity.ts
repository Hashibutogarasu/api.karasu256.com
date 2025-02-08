import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ArtifactSets } from "./artifact-sets.entity";
import { VersionsEntity } from "./versions.entity";
import { IBase } from "@karasu-lab/karasu-lab-sdk";

@Entity('artifacts')
export class Artifacts extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  icon_url: string;

  @ManyToMany(() => ArtifactSets, artifactSet => artifactSet.artifacts, { nullable: true })
  @JoinTable({
    name: 'artifact_set_artifact',
    joinColumn: {
      name: 'artifactId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'artifact_setId',
      referencedColumnName: 'id',
    },
  })
  artifact_sets?: ArtifactSets[] | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => VersionsEntity, version => version.artifacts)
  version: VersionsEntity;
}