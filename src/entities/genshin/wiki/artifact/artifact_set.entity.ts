import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

  @JoinColumn({ name: "2_piece_bonus_from_artifact_set" })
  @ManyToMany(() => Artifact, (artifact) => artifact.twoPieceBonus, { nullable: true })
  twoPieceBonus?: Artifact[] | undefined;

  @JoinColumn({ name: "4_piece_bonus_from_artifact_set" })
  @ManyToMany(() => Artifact, (artifact) => artifact.fourPieceBonus, { nullable: true })
  fourPieceBonus?: Artifact[] | undefined;

  @ManyToMany(() => CharacterPage, (characterPage) => characterPage.artifactSets, { nullable: true })
  characterPage?: CharacterPage[] | undefined;
}