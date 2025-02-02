import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { VersionEntity as KVersionEntity } from "@karasu-lab/karasu-lab-sdk";
import { Weapon } from "./weapons.entity";

@Entity('versions')
export class VersionEntity extends BaseEntity implements KVersionEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  released: boolean;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany(() => Weapon, weapon => weapon.version)
  entities: Weapon[];
}