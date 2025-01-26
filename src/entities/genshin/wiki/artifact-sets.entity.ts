import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ArtifactSets extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
}