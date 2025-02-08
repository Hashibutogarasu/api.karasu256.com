import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { Weapon } from "./weapons.entity";
import { ArtifactSets } from "./artifact-sets.entity";
import { Country } from "./countries.entity";
import { GICharacter } from "./gi_character.entity";
import { Artifacts } from "./artifacts.entity";
import { Transform } from 'class-transformer';

@Entity('versions')
export class VersionsEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name?: string | null;

  @Column()
  version_string: string;

  @Column({ default: false })
  released: boolean;

  // @Column({ nullable: true })
  // release_date?: Date | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => GICharacter, (character) => character.version)
  @JoinColumn({ name: 'characterId' })
  characters: GICharacter[];

  @ManyToMany(() => Weapon, { eager: true, nullable: true })
  @JoinTable({
    name: 'weapon',
    joinColumn: {
      name: 'weaponId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'weaponId',
      referencedColumnName: 'id',
    },
  })
  weapons?: Weapon[] | null;

  @ManyToMany(() => ArtifactSets, { eager: true, nullable: true })
  @JoinTable({
    name: 'artifact_set',
    joinColumn: {
      name: 'artifact_setId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'artifact_setId',
      referencedColumnName: 'id',
    },
  })
  artifact_sets?: ArtifactSets[] | null;

  @ManyToMany(() => Country, { eager: true, nullable: true })
  @JoinTable({
    name: 'country',
    joinColumn: {
      name: 'countryId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'countryId',
      referencedColumnName: 'id',
    },
  })
  countries?: Country[] | null;

  @ManyToMany(() => Artifacts, { eager: true, nullable: true })
  @JoinTable({
    name: 'artifact',
    joinColumn: {
      name: 'artifactId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'artifactId',
      referencedColumnName: 'id',
    },
  })
  artifacts?: Artifacts[] | null;
}