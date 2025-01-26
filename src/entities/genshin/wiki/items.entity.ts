import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Items extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
}