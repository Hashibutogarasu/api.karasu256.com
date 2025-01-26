import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Artifacts extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
}