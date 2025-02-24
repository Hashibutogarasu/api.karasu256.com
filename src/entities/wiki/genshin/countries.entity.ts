import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GICharacter } from "./gi_character.entity";
import { VersionsEntity } from "./versions.entity";
import { IBase } from "@karasu-lab/karasu-lab-sdk";
import { Transform } from 'class-transformer';

@Entity('countries')
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string | null;

  @Column({ nullable: true })
  thumbnail_url?: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => GICharacter, character => character.region, { nullable: true })
  @JoinColumn({ name: 'characterId' })
  characters?: GICharacter[] | null;

  @ManyToOne(() => VersionsEntity, version => version.id, { nullable: true })
  @JoinColumn({ name: 'versionId', referencedColumnName: 'id', foreignKeyConstraintName: 'versionId' })
  version?: VersionsEntity | null;
}