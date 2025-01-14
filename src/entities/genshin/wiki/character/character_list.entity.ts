import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { CharacterFilterValue } from "../character_data/character_page/character_filter_value"
import { DisplayField, DisplayFieldSchema } from "./character_display_field.entity"
import { CharacterListDataEntity } from "./character_data.entity"
import { z } from "zod";
import { CharacterFilterValueSchema } from "@/types/genshin/schemas/characters/character_filter_value";

@Entity("character_list")
export class CharacterListEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  entry_page_id: string;

  @Column()
  name: string;

  @Column()
  icon_url: string;

  @OneToMany(() => DisplayField, display_field => display_field.id)
  display_field: DisplayField;

  @OneToMany(() => CharacterFilterValue, character_filter_value => character_filter_value.id)
  filter_values: CharacterFilterValue;

  @Column()
  desc: string;

  @ManyToMany(() => CharacterListDataEntity, data => data.list)
  @JoinTable()
  data: CharacterListDataEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export const CharacterListEntitySchema = z.object({
  entry_page_id: z.string(),
  name: z.string(),
  icon_url: z.string(),
  display_field: DisplayFieldSchema,
  filter_values: CharacterFilterValueSchema,
  desc: z.string(),
});