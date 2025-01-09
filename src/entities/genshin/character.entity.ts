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
import { GenshinWeaponType, GenshinWeaponTypeSchema } from "./weapon.entity";
import { GenshinEntity } from "@/types/genshin/genshin";

@Entity("genshin_characters")
export class GenshinCharacterEntity extends GenshinEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  slug: string;

  @Column({ type: "varchar", enum: GenshinWeaponTypeSchema, name: "weapon_type" })
  @ApiProperty()
  weaponType: GenshinWeaponType;

  @Column({ type: "varchar" })
  @ApiProperty()
  description: string;

  @Column({ type: "varchar", array: true, default: "{}" })
  @ApiProperty()
  artifactIds: string[];

  @Column({ type: "int", default: 4 })
  @ApiProperty()
  rarity: number;

  @Column({ type: "varchar", nullable: true })
  @ApiProperty()
  image?: string | undefined;

  @ManyToOne(() => GenshinElementEntity, (element) => element.slug)
  element: GenshinElementEntity;
}
