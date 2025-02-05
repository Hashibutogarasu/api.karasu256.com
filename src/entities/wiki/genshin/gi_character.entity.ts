import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Country } from "./countries.entity";
import { Weapon } from "./weapons.entity";
import { ArtifactSets } from "./artifact-sets.entity";
import { Gallery } from "../../common/galleries.entity";
import { VersionsEntity } from "./versions.entity";
import { IBase } from "@karasu-lab/karasu-lab-sdk";

@Entity('characters')
export class GICharacter extends BaseEntity implements IBase {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string | null;

  @Column()
  icon_url: string;

  @Column({ nullable: true })
  element?: string | null;

  @Column({ nullable: true })
  rarity?: number | null;

  @Column({ nullable: true })
  header_img_url: string | null;

  @Column({ nullable: true })
  weapon_type?: string | null;

  @Column({ nullable: true })
  property?: string | null;

  @Column({ default: false })
  uninplemented: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Country, region => region.id, { nullable: true })
  region?: Country | null;

  @ManyToOne(() => Weapon, weapon => weapon.id, { nullable: true })
  weapon?: Weapon | null;

  @ManyToOne(() => VersionsEntity, version => version.characters)
  version: VersionsEntity;

  @ManyToMany(() => ArtifactSets)
  @JoinTable({
    name: "artifact_set_id",
    joinColumn: {
      name: "artifact_set",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "artifact_set",
      referencedColumnName: "id"
    }
  })
  artifact_set: ArtifactSets[];

  @ManyToMany(() => Gallery)
  @JoinTable({
    name: "galleries_id",
    joinColumn: {
      name: "galleries",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "galleries",
      referencedColumnName: "id"
    }
  })
  galleries: Gallery[];
}