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
import { GenshinElementEntity } from "./element.entity";
import { GenshinEntity } from "@/types/genshin/genshin";
import { GenshinCountryEntity } from "./country.entity";
import { GenshinWeaponTypeEntity } from "./weapons/weapon_type";

@Entity("genshin_characters")
export class GenshinCharacterEntity extends GenshinEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  slug: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "int", default: 4 })
  rarity: number;

  @Column({ type: "varchar", nullable: true })
  image?: string | undefined;

  @ManyToOne(() => GenshinElementEntity, (element) => element.slug, { nullable: true })
  element?: GenshinElementEntity | undefined;

  @ManyToOne(() => GenshinCountryEntity, (country) => country.slug, { nullable: true })
  country?: GenshinCountryEntity | undefined;

  @ManyToOne(() => GenshinWeaponTypeEntity, (weaponType) => weaponType.slug, { nullable: true })
  weaponType?: GenshinWeaponTypeEntity | undefined;
}
