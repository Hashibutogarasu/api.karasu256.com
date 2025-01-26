import { IBaseEntity } from "@/types/baseentity";
import { BaseEntity, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Character } from "./character.entity";
import { Artifacts } from "./artifacts.entity";

@Entity('artifact_sets')
export class ArtifactSets extends BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToMany(() => Artifacts, artifact => artifact.artifact_sets)
  artifacts: Artifacts[];

  @ManyToMany(() => Character, character => character.artifact_set)
  characters: Character[];
}