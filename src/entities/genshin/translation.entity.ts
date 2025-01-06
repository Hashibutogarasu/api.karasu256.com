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
import { GenshinCharacterEntity } from "./character.entity";
import { GenshinElementEntity } from "./element.entity";
import { GenshinWeaponEntity } from "./weapon.entity";
import { GenshinNormalAttackEntity } from "./skills/normal_attack.entity";
import { GenshinChargedAttackEntity } from "./skills/charged_attack.entity";
import { GenshinElementSkillEntity } from "./skills/element_skill.entity";
import { GenshinTalentEntity } from "./skills/talent.entity";
import { GenshinSpecialSkillEntity } from "./skills/special_skill.entity";
import { GenshinCountryEntity } from "./country.entity";
import { GenshinArtifactEntity } from "./artifacts/artifact.entity";
import { GenshinArtifactSetEntity } from "./artifacts/artifact_set.entity";

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
  character: GenshinCharacterEntity[];

  @OneToMany(() => GenshinElementEntity, (element) => element.id)
  element: GenshinElementEntity[];

  @OneToMany(() => GenshinWeaponEntity, (weapon) => weapon.id)
  weapon: GenshinWeaponEntity[];

  @OneToMany(() => GenshinArtifactEntity, (artifact) => artifact.id)
  artifact: GenshinArtifactEntity[];

  @OneToMany(() => GenshinArtifactSetEntity, (artifactSet) => artifactSet.id)
  artifactSet: GenshinArtifactSetEntity[];

  @OneToMany(() => GenshinNormalAttackEntity, (normalAttack) => normalAttack.id)
  normalAttack: GenshinNormalAttackEntity[];

  @OneToMany(() => GenshinChargedAttackEntity, (chargedAttack) => chargedAttack.id)
  chargedAttack: GenshinChargedAttackEntity[];

  @OneToMany(() => GenshinElementSkillEntity, (elementSkill) => elementSkill.id)
  elementSkill: GenshinElementSkillEntity[];

  @OneToMany(() => GenshinTalentEntity, (talent) => talent.id)
  talent: GenshinTalentEntity[];

  @OneToMany(() => GenshinSpecialSkillEntity, (specialSkill) => specialSkill.id)
  specialSkill: GenshinSpecialSkillEntity[];

  @OneToMany(() => GenshinCountryEntity, (country) => country.id)
  country: GenshinCountryEntity[];
}
