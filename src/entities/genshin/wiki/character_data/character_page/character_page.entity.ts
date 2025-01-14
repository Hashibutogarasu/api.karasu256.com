import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { CharacterExt } from "./character_ext/character_ext.entity";
import { CharacterFilterValues } from "./character_filtervalues/character_filtervalues/character_filtervalues.entity";
import { CharacterModules } from "./character_modules.entity";
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
