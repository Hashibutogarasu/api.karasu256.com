import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { z } from "zod";

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

export const CharacterComponentsSchema = z.object({
  component_id: z.string(),
  layout: z.string(),
  data: z.any(),
  style: z.string(),
});