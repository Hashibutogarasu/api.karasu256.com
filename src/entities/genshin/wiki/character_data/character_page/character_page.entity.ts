import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { z } from "zod";

import { CharacterExt, CharacterExtSchema } from "./character_ext/character_ext.entity";
import { CharacterFilterValues, CharacterFilterValuesSchema } from "./character_filtervalues/character_filtervalues/character_filtervalues.entity";
import { CharacterModules, CharacterModulesSchema } from "./character_modules.entity";
import { CharacterData } from "../character_data.entity";
import { ArtifactSet } from "../../artifact/artifact_set.entity";

@Entity("character_page")
export class CharacterPage extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  character_page_id: string;

  @Column({ type: "varchar" })
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  desc: string;

  @Column({ type: "varchar" })
  icon_url: string;

  @Column({ type: "varchar" })
  header_img_url: string;

  @JoinColumn({ referencedColumnName: "character_module_id", name: "characterModuleId" })
  @ManyToMany(() => CharacterModules, (characterModules) => characterModules.character_page, { onDelete: 'CASCADE' })
  modules: CharacterModules[];

  @JoinColumn({ referencedColumnName: "filter_values_id", name: "filterValuesId" })
  @OneToOne(() => CharacterFilterValues, (characterFilterValues) => characterFilterValues.character_page, { onDelete: 'CASCADE' })
  filter_values: CharacterFilterValues;

  @Column({ type: "varchar" })
  menu_id: string;

  @Column({ type: "varchar" })
  menu_name: string;

  @Column({ type: "varchar" })
  version: string;

  @Column({ type: "varchar", array: true })
  langs: string[];

  @Column({ type: "json", nullable: true })
  template_layout?: any;

  @Column({ type: "varchar" })
  edit_lock_status: string;

  @Column({ type: "varchar" })
  correct_lock_status: string;

  @Column({ type: "varchar", array: true })
  menus: string[];

  @Column({ type: "varchar" })
  template_id: string;

  @JoinColumn({ referencedColumnName: "ext_id", name: "extId" })
  @OneToOne(() => CharacterExt, (characterExt) => characterExt.character_page, { nullable: true, onDelete: 'CASCADE' })
  ext?: CharacterExt | undefined;

  @Column({ type: "varchar", nullable: true })
  alias_name?: string | undefined;

  @Column({ type: "varchar" })
  lang: string;

  @Column({ type: "boolean" })
  beta: boolean;

  @Column({ type: "varchar" })
  page_type: string;

  @Column({ type: "varchar" })
  menu_style: string;

  @JoinColumn({ referencedColumnName: "id", name: "dataId" })
  @OneToOne(() => CharacterData, (characterData) => characterData.page, { onDelete: 'CASCADE' })
  character_data: CharacterData;

  @ManyToMany(() => ArtifactSet, (artifactSet) => artifactSet.characterPage, { nullable: true })
  artifactSets?: ArtifactSet[] | undefined;
}

export const CharacterPageSchema = z.object({
  alias_name: z.string().optional(),
  beta: z.boolean().default(false),
  correct_lock_status: z.string(),
  desc: z.string().default(""),
  edit_lock_status: z.string().default("Unlock"),
  ext: CharacterExtSchema.nullable(),
  filter_values: CharacterFilterValuesSchema.nullable(),
  header_img_url: z.string().default(""),
  icon_url: z.string(),
  id: z.string(),
  lang: z.string().default(""),
  langs: z.array(z.any()).default([]),
  menu_id: z.string().default("2"),
  menu_name: z.string(),
  menu_style: z.string().default(""),
  menus: z.array(z.any()).default([]),
  modules: z.array(CharacterModulesSchema).nullable(),
  name: z.string(),
  page_type: z.string().default("Default"),
  template_id: z.string(),
  template_layout: z.any().nullable(),
  version: z.string(),
});