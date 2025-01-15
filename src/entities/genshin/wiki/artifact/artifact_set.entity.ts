import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CharacterPage } from "../character_data/character_page/character_page.entity";
import { Artifact } from "./artifact.entity";

@Entity("artifact_set")
export class ArtifactSet extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  icon_url: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  oneSetBonus?: string | undefined;

  @Column({ nullable: true })
  twoSetBonus?: string | undefined;

  @Column({ nullable: true })
  fourSetBonus?: string | undefined;

  @ManyToMany(() => CharacterPage, (characterPage) => characterPage.artifactSets, { nullable: true })
  characterPage?: CharacterPage[] | undefined;

  @OneToMany(() => Artifact, (artifact) => artifact.artifactSet, { nullable: true })
  artifacts?: Artifact[] | undefined;
}