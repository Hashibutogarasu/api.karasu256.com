import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
}