import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CharacterListEntity, CharacterListEntitySchema } from "./character_list.entity"
import { CharacterEntity } from "../character.entity";
import { z } from "zod";

@Entity("character_list_data")
export class CharacterListDataEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToMany(() => CharacterListEntity, list => list.data)
  list: CharacterListEntity[];

  @Column({ nullable: true })
  total?: string | null;

  @ManyToOne(() => CharacterEntity, character => character.id)
  character: CharacterEntity;
}

export const CharacterDataSchema = z.object({
  list: z.array(CharacterListEntitySchema).default([]),
  total: z.string().nullable(),
});