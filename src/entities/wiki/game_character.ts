import { Character, characterSchema } from "@/wiki/wiki.dto";
import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GameCharacter {
  @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ApiProperty()
  @Column()
  name!: string;

  @ApiProperty()
  @Column()
  rarity!: number;

  @ApiProperty()
  @Column({ type: "enum", enum: ["genshin_impact", "honkai_impact_3rd", "honkai_star_rail"], name: "game" })
  game!: "genshin_impact" | "honkai_impact_3rd" | "honkai_star_rail";

  @ApiProperty()
  @Column({ type: "jsonb" })
  specificData!: Record<string, any>;

  setData(data: unknown): void {
    const result = characterSchema.safeParse(data);

    if (!result.success) {
      throw new Error(result.error.errors.map((e) => e.message).join("\n"));
    }

    const { id, name, rarity, game, ...validatedData } = result.data;
    this.id = id;
    this.name = name;
    this.rarity = rarity;
    this.game = game;
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