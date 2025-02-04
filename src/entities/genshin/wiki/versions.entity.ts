import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { Weapon } from "./weapons.entity";
import { ArtifactSets } from "./artifact-sets.entity";
import { Country } from "./countries.entity";
import { Character } from "./character.entity";
import { Artifacts } from "./artifacts.entity";

@Entity('versions')
export class VersionsEntity extends BaseEntity implements IBase {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ nullable: true })
  name?: string | null;

  @Column()
  version_string: string;

  @Column({ default: false })
  released: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Character, (character) => character.version)
  characters: Character[];

  @ManyToMany(() => Weapon)
  weapons: Weapon[];

  @ManyToMany(() => ArtifactSets)
  artifact_sets: ArtifactSets[];

  @ManyToMany(() => Country)
  countries: Country[];

  @ManyToMany(() => Artifacts)
  artifacts: Artifacts[];
}