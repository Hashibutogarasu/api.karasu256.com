import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from "typeorm";
import { ArtifactSet } from "./artifact_set.entity";

@Entity("artifact")
export class Artifact extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @Column()
  icon_url: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => ArtifactSet, (artifactSet) => artifactSet.artifacts)
  @JoinColumn()
  artifactSet: ArtifactSet;
}