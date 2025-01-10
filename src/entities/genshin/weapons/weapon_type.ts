import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("genshin_weapon_types")
export class GenshinWeaponTypeEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  slug: string;

  @Column({ type: "varchar", nullable: true })
  description: string | undefined;
}