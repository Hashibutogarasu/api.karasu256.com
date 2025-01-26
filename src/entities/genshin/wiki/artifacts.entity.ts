import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Artifacts extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  icon_url: string;

  @Column()
  one_set_effect: string;

  @Column()
  two_set_effect: string;

  @Column()
  four_set_effect: string;

  @Column()
  version: string;
}