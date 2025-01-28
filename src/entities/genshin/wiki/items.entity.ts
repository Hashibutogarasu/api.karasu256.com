import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('items')
export class Items extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
}