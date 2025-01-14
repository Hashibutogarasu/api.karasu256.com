import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { z } from "zod";
import { CharacterFilterValue } from "./character_filter_value";

@Entity("character_value_type")
export class CharacterValueType extends BaseEntity {
  @PrimaryColumn({ type: 'uuid', generated: 'uuid' })
  id: string;

  @Column({ type: "varchar", nullable: true })
  hoyolab_id?: string | undefined;

  @Column({ type: "varchar", nullable: true })
  value?: string | undefined;

  @Column({ type: "varchar", nullable: true })
  mi18n_key?: string | undefined;

  @Column({ type: "varchar", nullable: true })
  icon?: string | undefined;

  @Column({ type: "varchar", nullable: true })
  enum_string?: string | undefined;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => CharacterFilterValue, (value_type) => value_type.value_types)
  @JoinTable()
  value_types: CharacterFilterValue[];
}
