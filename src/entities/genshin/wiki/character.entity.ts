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

  @Column({ nullable: true })
  element?: string | undefined;

  @Column({ nullable: true })
  rarity?: number | undefined;

  @Column()
  version: string;

  @Column()
  header_img_url: string;

  @Column({ nullable: true })
  weapon_type?: string | undefined;

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