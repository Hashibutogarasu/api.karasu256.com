import { ApiProperty } from "@nestjs/swagger";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { GenshinEntity } from "@/types/genshin/genshin";
import { GenshinElementEntity } from "../element.entity";
import { GenshinCountryEntity } from "../country.entity";
import { GenshinWeaponTypeEntity } from "../weapons/weapon_type";

@Entity("genshin_characters")
export class GenshinCharacterEntity extends GenshinEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: true })
  entry_page_id?: string | undefined;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  slug: string;

  @Column({ type: "varchar", nullable: true })
  description: string | undefined;

  @Column({ type: "int", default: 4 })
  rarity: number;

  @Column({ type: "varchar", nullable: true })
  image?: string | undefined;

  @ManyToOne(() => GenshinElementEntity, (element) => element.id, { nullable: true })
  element?: GenshinElementEntity | undefined;

  @ManyToOne(() => GenshinCountryEntity, (country) => country.id, { nullable: true })
  country?: GenshinCountryEntity | undefined;

  @ManyToOne(() => GenshinWeaponTypeEntity, (weaponType) => weaponType.id, { nullable: true })
  weaponType?: GenshinWeaponTypeEntity | undefined;
}
