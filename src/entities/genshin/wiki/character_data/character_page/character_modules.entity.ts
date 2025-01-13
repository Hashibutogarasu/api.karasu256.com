import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { CharacterComponents, CharacterComponentsSchema } from "./character_components.entity";
import { z } from "zod";
import { CharacterPage } from "./character_page.entity";

@Entity("character_modules")
export class CharacterModules extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  character_module_id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "boolean" })
  is_poped: boolean;

  @JoinColumn({ referencedColumnName: "id", name: "id" })
  @ManyToOne(() => CharacterComponents, (characterComponents) => characterComponents.id, { nullable: true, onDelete: 'CASCADE' })
  components: CharacterComponents[]

  @Column({ type: "varchar" })
  hoyolab_id: string;

  @Column({ type: "boolean" })
  is_customize_name: boolean;

  @Column({ type: "boolean" })
  is_abstract: boolean;

  @Column({ type: "boolean" })
  is_show_switch: boolean;

  @Column({ type: "boolean" })
  switch: boolean;

  @Column({ type: "varchar" })
  desc: string;

  @Column({ type: "boolean" })
  repeated: boolean;

  @Column({ type: "boolean" })
  is_submodule: boolean;

  @Column({ type: "varchar" })
  origin_module_id: string;

  @Column({ type: "boolean" })
  without_border: boolean;

  @Column({ type: "boolean" })
  can_delete: boolean;

  @Column({ type: "boolean" })
  is_hidden: boolean;

  @Column({ type: "boolean" })
  rich_text_editing: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => CharacterPage, (characterPage) => characterPage.modules, { nullable: true, onDelete: 'CASCADE' })
  @JoinTable()
  character_page?: CharacterPage[] | undefined;
}

export const CharacterModulesSchema = z.object({
  name: z.string(),
  is_poped: z.boolean(),
  components: z.array(CharacterComponentsSchema).nullable(),
  id: z.string(),
  is_customize_name: z.boolean(),
  is_abstract: z.boolean(),
  is_show_switch: z.boolean(),
  switch: z.boolean(),
  desc: z.string(),
  repeated: z.boolean(),
  is_submodule: z.boolean(),
  origin_module_id: z.string(),
  without_border: z.boolean(),
  can_delete: z.boolean(),
  is_hidden: z.boolean(),
  rich_text_editing: z.boolean(),
});