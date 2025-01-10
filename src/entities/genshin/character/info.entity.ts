import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, SaveOptions, UpdateDateColumn } from "typeorm";
import { GenshinEntity } from "@/types/genshin/genshin";
import { number, z } from "zod";
import { WikiDataSchema } from "@/types/genshin/schema";

type WikiData = z.infer<typeof WikiDataSchema>;

@Entity('genshin_character_info')
export class GenshinCharacterInfoEntity extends GenshinEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  slug: string;

  @Column({ type: "varchar" })
  data: WikiData;
};
