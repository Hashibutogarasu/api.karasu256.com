import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Character } from "./character.entity";

@Entity('countries')
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string | undefined;

  @Column({ nullable: true })
  sumbnail_url?: string | undefined;

  @Column({ nullable: true })
  version: string | undefined;

  @OneToMany(() => Character, character => character.country)
  characters: Character[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}