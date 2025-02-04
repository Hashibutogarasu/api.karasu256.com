import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Country } from "./countries.entity";
import { Weapon } from "./weapons.entity";
import { ArtifactSets } from "./artifact-sets.entity";
import { Gallery } from "../../common/galleries.entity";
import { VersionsEntity } from "./versions.entity";
import { IBase } from "@karasu-lab/karasu-lab-sdk";

@Entity('characters')
export class Character extends BaseEntity implements IBase {
  @PrimaryGeneratedColumn('increment')
  id: string;

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
  header_img_url: string;

  @Column({ nullable: true })
  weapon_type?: string | undefined;

  @Column({ nullable: true })
  property?: string | undefined;

  @Column({ default: false })
  uninplemented: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Country, country => country.id, { nullable: true })
  country?: Country | null;

  @ManyToOne(() => Weapon, weapon => weapon.id, { nullable: true })
  weapon?: Weapon | null;

  @ManyToMany(() => ArtifactSets, artifactSet => artifactSet.characters)
  artifact_set: ArtifactSets[];

  @OneToMany(() => Gallery, gallery => gallery.id, { nullable: true })
  galleries?: Gallery[] | null;

  @OneToMany(() => VersionsEntity, version => version.characters)
  version: VersionsEntity;
}