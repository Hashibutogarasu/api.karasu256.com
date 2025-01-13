import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { z } from "zod";
import { CharacterData, CharacterDataSchema } from "./character_data/character_data.entity";

@Entity("character_info")
export class CharacterInfo extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "int" })
  retcode: number;

  @Column({ type: "varchar" })
  message: string;

  @JoinColumn({ referencedColumnName: 'id', name: 'id' })
  @ManyToOne(() => CharacterData, (characterData) => characterData.id, { nullable: true, onDelete: 'CASCADE' })
  data: CharacterData;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export const CharacterInfoSchema = z.object({
  retcode: z.number().int(),
  message: z.string(),
  data: CharacterDataSchema.nullable(),
});

export type CharacterInfoType = z.infer<typeof CharacterInfoSchema>;