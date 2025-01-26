import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Weapons extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
}