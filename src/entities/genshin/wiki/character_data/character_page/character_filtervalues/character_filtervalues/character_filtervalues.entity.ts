import { BaseEntity, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { z } from "zod";
import { CharacterFilterValue, CharacterFilterValueSchema } from "../../character_filter_value";
import { CharacterPage } from "../../character_page.entity";

@Entity("character_filtervalues")
export class CharacterFilterValues extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  filter_values_id: string;

  @JoinColumn({ referencedColumnName: "id", name: "character_rarity_id" })
  @ManyToOne(() => CharacterFilterValue, (characterRarity) => characterRarity.id, { nullable: true, onDelete: 'CASCADE', cascade: ['soft-remove'] })
  character_rarity?: CharacterFilterValue | undefined;

  @JoinColumn({ referencedColumnName: "id", name: "character_property_id" })
  @ManyToOne(() => CharacterFilterValue, (characterProperty) => characterProperty.id, { nullable: true, onDelete: 'CASCADE', cascade: ['soft-remove'] })
  character_property?: CharacterFilterValue | undefined;

  @JoinColumn({ referencedColumnName: "id", name: "character_vision_id" })
  @ManyToOne(() => CharacterFilterValue, (characterVision) => characterVision.id, { nullable: true, onDelete: 'CASCADE', cascade: ['soft-remove'] })
  character_vision?: CharacterFilterValue | undefined;

  @JoinColumn({ referencedColumnName: "id", name: "character_weapon_id" })
  @ManyToOne(() => CharacterFilterValue, (characterWeapon) => characterWeapon.id, { nullable: true, onDelete: 'CASCADE', cascade: ['soft-remove'] })
  character_weapon?: CharacterFilterValue | undefined;

  @JoinColumn({ referencedColumnName: "id", name: "character_region_id" })
  @ManyToOne(() => CharacterFilterValue, (characterRegion) => characterRegion.id, { nullable: true, onDelete: 'CASCADE', cascade: ['soft-remove'] })
  character_region?: CharacterFilterValue | undefined;

  @OneToOne(() => CharacterPage, (characterPage) => characterPage.filter_values, { nullable: true, onDelete: 'CASCADE', cascade: ['soft-remove'] })
  character_page?: CharacterPage | undefined;
}

export const CharacterFilterValuesSchema = z.object({
  character_rarity: CharacterFilterValueSchema.nullable(),
  character_property: CharacterFilterValueSchema.nullable(),
  character_vision: CharacterFilterValueSchema.nullable(),
  character_weapon: CharacterFilterValueSchema.nullable(),
  character_region: CharacterFilterValueSchema.nullable(),
});