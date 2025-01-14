import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { CharacterFilterValue } from "./character_filter_value";

@Entity("character_key")
export class CharacterKey extends BaseEntity {
  @PrimaryColumn({ type: 'uuid', generated: 'uuid' })
  character_key_id: string;

  @Column({ type: "varchar" })
  key: string;

  @Column({ type: "varchar" })
  text: string;

  @Column({ type: "varchar", array: true })
  values: any[];

  @Column({ type: "varchar" })
  mi18n_key: string;

  @Column({ type: "boolean" })
  is_multi_select: boolean;

  @Column({ type: "varchar", nullable: true })
  hoyolab_id?: string | undefined;

  @Column({ type: "boolean" })
  is_hidden: boolean;

  @Column({ type: "varchar" })
  updated_at: string;

  @OneToOne(() => CharacterFilterValue, (filter_value) => filter_value.key)
  @JoinColumn()
  filter_value: CharacterFilterValue;
}
