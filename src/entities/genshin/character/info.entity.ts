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
import { GenshinWeaponEntity } from "../weapon.entity";
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

  @Column({ type: "varchar" })
  @ApiProperty()
  weaponType: string;

  @Column({ type: "varchar", nullable: true })
  @ApiProperty()
  description: string | undefined;

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
  element?: GenshinElementEntity | undefined;

  @ManyToMany(() => GenshinArtifactSetEntity, (artifactSet) => artifactSet.slug, { nullable: true })
  artifactSet?: GenshinArtifactSetEntity[] | undefined;

  @ManyToMany(() => GenshinNormalAttackEntity, (normalAttack) => normalAttack.slug, { nullable: true })
  normalAttack?: GenshinNormalAttackEntity | undefined;

  @ManyToMany(() => GenshinChargedAttackEntity, (chargedAttack) => chargedAttack.slug, { nullable: true })
  chargedAttack?: GenshinChargedAttackEntity | undefined;

  @ManyToMany(() => GenshinElementSkillEntity, (elementSkill) => elementSkill.slug, { nullable: true })
  elementSkill?: GenshinElementSkillEntity | undefined;

  @ManyToMany(() => GenshinTalentEntity, (talent) => talent.slug, { nullable: true })
  talent?: GenshinTalentEntity | undefined;

  @ManyToMany(() => GenshinSpecialSkillEntity, (specialSkill) => specialSkill.slug, { nullable: true })
  specialSkill?: GenshinSpecialSkillEntity | undefined;

  @ManyToOne(() => GenshinCountryEntity, (country) => country.slug, { nullable: true })
  country?: GenshinCountryEntity | undefined;

  @ManyToOne(() => GenshinWeaponEntity, (weapon) => weapon.slug, { nullable: true })
  motifWeapon?: GenshinWeaponEntity | undefined;
};

