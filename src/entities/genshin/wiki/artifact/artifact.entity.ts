import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

  @JoinColumn({ name: "2_piece_bonus_from_artifact" })
  @ManyToMany(() => ArtifactSet, (artifactSet) => artifactSet.twoPieceBonus, { nullable: true })
  twoPieceBonus?: ArtifactSet[] | undefined;

  @JoinColumn({ name: "4_piece_bonus_from_artifact" })
  @ManyToMany(() => ArtifactSet, (artifactSet) => artifactSet.fourPieceBonus, { nullable: true })
  fourPieceBonus?: ArtifactSet[] | undefined;
}