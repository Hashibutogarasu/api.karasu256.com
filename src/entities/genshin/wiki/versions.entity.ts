import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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
  name?: string | undefined;

  @Column()
  version_string: string;

  @Column({ default: false })
  released: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Weapon, weapon => weapon.version)
  entities: Weapon[];

  @OneToMany(() => ArtifactSets, artifact_set => artifact_set.version)
  artifact_sets: ArtifactSets[];

  @OneToMany(() => Country, country => country.version)
  countries: Country[];

  @OneToMany(() => Character, character => character.version)
  characters: Character[];

  @ManyToOne(() => Artifacts, artifact => artifact.version)
  artifacts: Artifacts[];
}