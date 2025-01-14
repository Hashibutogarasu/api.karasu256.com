import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { CharacterKey } from "./character_key.entity";
import { CharacterValueType } from "./character_value_type.entity";
import { CharacterListEntity } from "../../character/character_list.entity";

@Entity("character_filter_value")
export class CharacterFilterValue extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", array: true })
  values: string[];

  @ManyToMany(() => CharacterValueType, (value_type) => value_type.value_types, { onDelete: 'CASCADE' })
  value_types: CharacterValueType[];

  @OneToOne(() => CharacterKey, (characterKey) => characterKey.filter_value, { onDelete: 'CASCADE', nullable: true })
  @JoinTable()
  key?: CharacterKey | undefined;

  @OneToOne(() => CharacterListEntity, (characterList) => characterList.filter_values, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn()
  character_list?: CharacterListEntity | undefined;
}
