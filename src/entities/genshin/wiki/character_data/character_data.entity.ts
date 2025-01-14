import { BaseEntity, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CharacterPage } from "./character_page/character_page.entity";

@Entity("character_data")
export class CharacterData extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @JoinColumn({ referencedColumnName: "character_page_id", name: "characterPageId" })
  @OneToOne(() => CharacterPage, (characterPage) => characterPage.character_data, { nullable: true, onDelete: 'CASCADE' })
  page: CharacterPage;
}

