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

@Entity("translations")
export class TranslationEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  key: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  value: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @OneToMany(() => GenshinCharacterEntity, (character) => character.id)
  character: GenshinCharacterEntity;

  @OneToMany(() => GenshinElementEntity, (element) => element.id)
  element: GenshinElementEntity;

  @OneToMany(() => GenshinWeaponEntity, (weapon) => weapon.id)
  weapon: GenshinWeaponEntity;

  @OneToMany(() => GenshinWeapon, (weaponType) => weaponType.id)
  weaponType: GenshinWeapon;

  @OneToMany(() => GenshinArtifactEntity, (artifact) => artifact.id)
  artifact: GenshinArtifactEntity;

  @OneToMany(() => GenshinArtifactSetEntity, (artifactSet) => artifactSet.id)
  artifactSet: GenshinArtifactSetEntity;

  @OneToMany(() => GenshinNormalAttackEntity, (normalAttack) => normalAttack.id)
  normalAttack: GenshinNormalAttackEntity;

  @OneToMany(() => GenshinChargedAttackEntity, (chargedAttack) => chargedAttack.id)
  chargedAttack: GenshinChargedAttackEntity;

  @OneToMany(() => GenshinElementSkillEntity, (elementSkill) => elementSkill.id)
  elementSkill: GenshinElementSkillEntity;

  @OneToMany(() => GenshinTalentEntity, (talent) => talent.id)
  talent: GenshinTalentEntity;

  @OneToMany(() => GenshinSpecialSkillEntity, (specialSkill) => specialSkill.id)
  specialSkill: GenshinSpecialSkillEntity;

  @OneToMany(() => GenshinCountryEntity, (country) => country.id)
  country: GenshinCountryEntity;
}

@Entity("genshin_characters")
export class GenshinCharacterEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  backgroundDescription: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => GenshinElementEntity, (element) => element.id)
  element: GenshinElementEntity;

  @ManyToOne(() => GenshinWeaponEntity, (weapon) => weapon.id)
  weapon: GenshinWeaponEntity;

  @ManyToMany(() => GenshinArtifactSetEntity, (artifactSet) => artifactSet.id)
  artifactSet: GenshinArtifactSetEntity;

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

  @ManyToOne(() => GenshinCountryEntity, (country) => country.id)
  country: GenshinCountryEntity;

  @ManyToOne(() => GenshinWeapon, (weaponType) => weaponType.id)
  weaponType: GenshinWeapon;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}

@Entity("genshin_elements")
export class GenshinElementEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  element: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  vision: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => GenshinCharacterEntity, (character) => character.id)
  character: GenshinCharacterEntity;

  @ManyToOne(() => GenshinWeaponEntity, (weapon) => weapon.id)
  weapon: GenshinWeaponEntity;

  @ManyToMany(() => GenshinArtifactSetEntity, (artifactSet) => artifactSet.id)
  artifactSet: GenshinArtifactSetEntity;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}

@Entity("genshin_weapons")
export class GenshinWeaponEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  backgroundDescription: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => GenshinCharacterEntity, (character) => character.id)
  character: GenshinCharacterEntity;

  @ManyToOne(() => GenshinWeapon, (weaponType) => weaponType.id)
  weaponType: GenshinWeapon;

  @ManyToMany(() => GenshinArtifactSetEntity, (artifactSet) => artifactSet.id)
  artifactSet: GenshinArtifactSetEntity;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}

enum GenshinWeaponType {
  // 片手剣
  SWORD = "sword",
  // 両手剣
  CLAYMORE = "claymore",
  // 弓
  BOW = "bow",
  // 法器
  CATALYST = "catalyst",
  // 長柄武器
  POLEARM = "polearm",
}

@Entity("genshin_weapon")
export class GenshinWeapon extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @Column({ type: "enum", enum: GenshinWeaponType })
  @ApiProperty()
  type: GenshinWeaponType;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}

enum GenshinArtifactPart {
  FLOWER_OF_LIFE = "flower_of_life",
  PLUME_OF_DEATH = "plume_of_death",
  SANDS_OF_EON = "sands_of_eon",
  GOBLET_OF_EONOTHEN = "goblet_of_eonothem",
  CIRCLET_OF_LOGOS = "circlet_of_logos",
}

enum GenshinArtifactMainStat {
  ATK = "atk",
  HP = "hp",
  DEF = "def",
  ATK_PERCENT = "atk_percent",
  HP_PERCENT = "hp_percent",
  DEF_PERCENT = "def_percent",
  ELEMENTAL_MASTERY = "elemental_mastery",
  ENERGY_RECHARGE = "energy_recharge",
  CRIT_RATE = "crit_rate",
  CRIT_DAMAGE = "crit_damage",
  HEALING_BONUS = "healing_bonus",
  ANEMO_DAMAGE_BONUS = "anemo_damage_bonus",
  GEO_DAMAGE_BONUS = "geo_damage_bonus",
  ELECTRO_DAMAGE_BONUS = "electro_damage_bonus",
  HYDRO_DAMAGE_BONUS = "hydro_damage_bonus",
  PYRO_DAMAGE_BONUS = "pyro_damage_bonus",
  CRYO_DAMAGE_BONUS = "cryo_damage_bonus",
  PHYSICAL_DAMAGE_BONUS = "physical_damage_bonus",
}

enum GenshinArtifactSubStat {
  ATK = "atk",
  HP = "hp",
  DEF = "def",
  ATK_PERCENT = "atk_percent",
  HP_PERCENT = "hp_percent",
  DEF_PERCENT = "def_percent",
  ELEMENTAL_MASTERY = "elemental_mastery",
  ENERGY_RECHARGE = "energy_recharge",
  CRIT_RATE = "crit_rate",
  CRIT_DAMAGE = "crit_damage",
}

@Entity("genshin_artifacts")
export class GenshinArtifactEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  backgroundDescription: string;

  @Column({ type: "enum", enum: GenshinArtifactPart })
  @ApiProperty()
  part: GenshinArtifactPart;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStat: GenshinArtifactMainStat;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}

@Entity("genshin_artifact_sets")
export class GenshinArtifactSetEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  backgroundDescription: string;

  @Column({ type: "int" })
  @ApiProperty()
  setCount: number;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStatOfFlower: GenshinArtifactMainStat;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStatOfPlume: GenshinArtifactMainStat;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStatOfSands: GenshinArtifactMainStat;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStatOfGoblet: GenshinArtifactMainStat;

  @Column({ type: "enum", enum: GenshinArtifactMainStat })
  @ApiProperty()
  mainStatOfCirclet: GenshinArtifactMainStat;

  @Column({ type: "enum", enum: GenshinArtifactSubStat, array: true })
  @ApiProperty()
  recommendedSubStats: GenshinArtifactSubStat[];

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToMany(() => GenshinArtifactEntity, (artifact) => artifact.id)
  artifacts: GenshinArtifactEntity[];

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}

@Entity("genshin_normal_attacks")
export class GenshinNormalAttackEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  backgroundDescription: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}

@Entity("genshin_charged_attacks")
export class GenshinChargedAttackEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  backgroundDescription: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}

@Entity("genshin_element_skills")
export class GenshinElementSkillEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  backgroundDescription: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}

@Entity("genshin_talents")
export class GenshinTalentEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  backgroundDescription: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}

@Entity("genshin_special_skills")
export class GenshinSpecialSkillEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  backgroundDescription: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}

@Entity("genshin_countries")
export class GenshinCountryEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  backgroundDescription: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => GenshinCharacterEntity, (character) => character.id)
  character: GenshinCharacterEntity;

  @ManyToOne(() => TranslationEntity, (translation) => translation.id)
  translation: TranslationEntity;
}