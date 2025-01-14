import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('character_components')
export class CharacterComponents extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  component_id: string;

  @Column({ type: 'varchar' })
  layout: string;

  @Column({ type: 'json' })
  data: any;

  @Column({ type: 'varchar' })
  style: string;
}
