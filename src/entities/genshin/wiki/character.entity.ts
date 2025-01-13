import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { CharacterDataSchema, CharacterListDataEntity } from "./character/character_data.entity"
import { z } from "zod";

@Entity()
export class CharacterEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  retcode: number;

  @Column()
  message: string;

  @OneToMany(() => CharacterListDataEntity, data => data.character)
  data: CharacterListDataEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export const CharacterEntitySchema = z.object({
  retcode: z.number(),
  message: z.string(),
  data: CharacterDataSchema,
});