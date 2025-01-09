import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GenshinElementEntity } from "../element.entity";
import { GenshinArtifactSetEntity } from "../artifacts/artifact_set.entity";
import { GenshinNormalAttackEntity } from "../skills/normal_attack.entity";
import { GenshinChargedAttackEntity } from "../skills/charged_attack.entity";
import { GenshinElementSkillEntity } from "../skills/element_skill.entity";
import { GenshinTalentEntity } from "../skills/talent.entity";
import { GenshinSpecialSkillEntity } from "../skills/special_skill.entity";
import { GenshinCountryEntity } from "../country.entity";
import { GenshinWeaponEntity, GenshinWeaponType, GenshinWeaponTypeSchema } from "../weapon.entity";
import { GenshinEntity } from "@/types/genshin/genshin";

@Entity('genshin_character_info')
export class GenshinCharacterInfoEntity extends GenshinEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  parentId: string;

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

  @ManyToOne(() => GenshinElementEntity, (element) => element.id)
  element: GenshinElementEntity;

  @ManyToMany(() => GenshinArtifactSetEntity, (artifactSet) => artifactSet.id)
  artifactSet: GenshinArtifactSetEntity[];

  @ManyToMany(() => GenshinNormalAttackEntity, (normalAttack) => normalAttack.id)
  normalAttack: GenshinNormalAttackEntity;

  @ManyToMany(() => GenshinChargedAttackEntity, (chargedAttack) => chargedAttack.id)
  chargedAttack: GenshinChargedAttackEntity;

  @ManyToMany(() => GenshinElementSkillEntity, (elementSkill) => elementSkill.id)
  elementSkill: GenshinElementSkillEntity;

  @ManyToMany(() => GenshinTalentEntity, (talent) => talent.id)
  talent: GenshinTalentEntity;

  @ManyToMany(() => GenshinSpecialSkillEntity, (specialSkill) => specialSkill.id)
  specialSkill: GenshinSpecialSkillEntity;

  @ManyToOne(() => GenshinCountryEntity, (country) => country.id, { nullable: true })
  country?: GenshinCountryEntity | undefined;

  @ManyToOne(() => GenshinWeaponEntity, (weapon) => weapon.id)
  motifWeapon: GenshinWeaponEntity;
};

