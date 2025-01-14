import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Artifact } from "./artifact.entity";
import { CharacterPage } from "../character_data/character_page/character_page.entity";

@Entity("artifact_set")
export class ArtifactSet extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  icon_url: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => Artifact, (artifact) => artifact.artifactSets, { nullable: true })
  artifacts?: Artifact[] | undefined;

  @ManyToMany(() => CharacterPage, (characterPage) => characterPage.artifactSets, { nullable: true })
  characterPage?: CharacterPage[] | undefined;
}