import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Country } from "./countries.entity";
import { Weapon } from "./weapons.entity";
import { ArtifactSets } from "./artifact-sets.entity";
import { Gallery } from "../../common/galleries.entity";
import { VersionsEntity } from "./versions.entity";

@Entity('characters')
export class GICharacter extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string | null;

  @Column()
  icon_url: string;

  @Column({ nullable: true })
  element?: string | null;

  @Column({ default: 4 })
  rarity: number;

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

  @Column({ nullable: true })
  implemented_date?: string | null;

  @ManyToOne(() => Country, country => country.id, { nullable: true })
  region?: Country | null;

  @ManyToOne(() => Weapon, weapon => weapon.id, { nullable: true })
  weapon?: Weapon | null;

  @ManyToOne(() => VersionsEntity, version => version.id, { nullable: true })
  version?: VersionsEntity | null;

  @ManyToMany(() => ArtifactSets, { nullable: true })
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
  artifact_set?: ArtifactSets[] | null;

  @ManyToMany(() => Gallery, { nullable: true })
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
  galleries?: Gallery[] | null;
}