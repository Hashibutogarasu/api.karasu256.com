import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { CharacterComponents } from "./character_components.entity";
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
