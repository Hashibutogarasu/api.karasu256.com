import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GICharacter } from "./gi_character.entity";
import { Artifacts } from "./artifacts.entity";
import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { VersionsEntity } from "./versions.entity";

@Entity('artifact_sets')
export class ArtifactSets extends BaseEntity implements IBase {
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
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Artifacts, artifact => artifact.artifact_sets, { eager: true, nullable: true })
  @JoinTable({
    name: 'artifact_set_artifact',
    joinColumn: {
      name: 'artifact_setId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'artifactId',
      referencedColumnName: 'id',
    },
  })
  artifacts?: Artifacts[] | null;

  @ManyToMany(() => GICharacter, character => character.artifact_set, { eager: true, nullable: true })
  @JoinTable({
    name: 'artifact_set_character',
    joinColumn: {
      name: 'artifact_setId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'characterId',
      referencedColumnName: 'id',
    },
  })
  characters?: GICharacter[] | null;

  @OneToMany(() => VersionsEntity, version => version.artifact_sets)
  version: VersionsEntity;
}