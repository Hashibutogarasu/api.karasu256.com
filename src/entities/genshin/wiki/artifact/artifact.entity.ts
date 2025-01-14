import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ArtifactSet } from "./artifact_set.entity";

@Entity("artifact")
export class Artifact extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  icon_url: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => ArtifactSet, (artifactSet) => artifactSet.artifacts, { nullable: true })
  artifactSets?: ArtifactSet[] | undefined;
}