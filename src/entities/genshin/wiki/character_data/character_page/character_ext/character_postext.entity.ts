import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("character_postext")
export class CharacterPostExt extends BaseEntity {
  @PrimaryColumn({ type: 'uuid', generated: 'uuid' })
  id: string;

  @Column({ type: "varchar" })
  post_id: string;

  @Column({ type: "varchar" })
  post_user_name: string;

  @Column({ type: "varchar" })
  post_time: string;

  @Column({ type: "varchar" })
  post_avatar_url: string;

  @Column({ type: "varchar" })
  url: string;
}
