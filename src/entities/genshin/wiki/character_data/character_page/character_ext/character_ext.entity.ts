import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { z } from "zod";
import { CharacterPostExt, CharacterPostExtSchema } from "./character_postext.entity";
import { CharacterPage } from "../character_page.entity";


@Entity("character_ext")
export class CharacterExt extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  ext_id: string;

  @Column({ type: "varchar", nullable: true })
  fe_ext?: string | undefined;

  @JoinColumn({ referencedColumnName: "id", name: "id" })
  @ManyToOne(() => CharacterPostExt, (characterPostExt) => characterPostExt.id, { nullable: true, onDelete: 'CASCADE', cascade: ['soft-remove'] })
  post_ext: CharacterPostExt;

  @Column({ type: "varchar", nullable: true })
  server_ext?: string | undefined

  @Column({ type: "varchar", nullable: true })
  personalized_color?: string | undefined

  @Column({ type: "varchar" })
  scrolling_text: string;

  @Column({ type: "varchar" })
  corner_mark: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => CharacterPage, (characterPage) => characterPage.ext, { nullable: true, onDelete: 'CASCADE', cascade: ['soft-remove'] })
  character_page?: CharacterPage | undefined;
}

export const CharacterExtSchema = z.object({
  corner_mark: z.string(),
  fe_ext: z.string().nullable(),
  personalized_color: z.string().nullable(),
  scrolling_text: z.string(),
  server_ext: z.string().nullable(),
  post_ext: CharacterPostExtSchema.nullable(),
});