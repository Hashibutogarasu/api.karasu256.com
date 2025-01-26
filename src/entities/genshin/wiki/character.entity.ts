import { IBaseEntity } from "@/types/baseentity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Country } from "./countries.entity";
import { Weapon } from "./weapons.entity";
import { ArtifactSets } from "./artifact-sets.entity";

@Entity('characters')
export class Character extends BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  icon_url: string;

  @Column()
  element: string;

  @Column()
  rarity: number;

  @Column()
  version: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Country, country => country.id, { nullable: true })
  country?: Country | null;

  @ManyToOne(() => Weapon, weapon => weapon.id, { nullable: true })
  weapon?: Weapon | null;

  @ManyToMany(() => ArtifactSets, artifactSet => artifactSet.characters)
  artifact_set: ArtifactSets[];
}