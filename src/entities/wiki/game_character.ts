import { Character, characterSchema } from "@/wiki/wiki.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GameCharacter {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  rarity!: number;

  @Column({ type: "enum", enum: ["genshin_impact", "honkai_impact_3rd", "honkai_star_rail"], name: "game" })
  game!: string;

  @Column({ type: "jsonb" })
  specificData!: Record<string, any>;

  setData(data: unknown): void {
    const result = characterSchema.safeParse(data);

    if (!result.success) {
      throw new Error(result.error.errors.map((e) => e.message).join("\n"));
    }

    const validatedData = result.data;
    this.id = validatedData.id;
    this.name = validatedData.name;
    this.rarity = validatedData.rarity;
    this.game = validatedData.game;
    this.specificData = validatedData;
  }

  getValidatedData(): Character {
    const data = {
      id: this.id,
      name: this.name,
      rarity: this.rarity,
      game: this.game,
      ...this.specificData,
    };

    const result = characterSchema.safeParse(data);
    return result.data;
  }
}