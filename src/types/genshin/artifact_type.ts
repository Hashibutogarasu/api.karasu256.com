import { z } from "zod";

export const GenshinArtifactPartSchema = z.nativeEnum({
  flower_of_life: "flower_of_life",
  plume_of_death: "plume_of_death",
  sands_of_eon: "sands_of_eon",
  goblet_of_eonothem: "goblet_of_eonothem",
  circlet_of_logos: "circlet_of_logos",
});

export type GenshinArtifactPart = z.infer<typeof GenshinArtifactPartSchema>;

export const GenshinArtifactMainStatSchema = z.nativeEnum({
  atk: "atk",
  hp: "hp",
  def: "def",
  atk_percent: "atk_percent",
  hp_percent: "hp_percent",
  def_percent: "def_percent",
  elemental_mastery: "elemental_mastery",
  energy_recharge: "energy_recharge",
  crit_rate: "crit_rate",
  crit_damage: "crit_damage",
  healing_bonus: "healing_bonus",
  anemo_damage_bonus: "anemo_damage_bonus",
  geo_damage_bonus: "geo_damage_bonus",
  electro_damage_bonus: "electro_damage_bonus",
  hydro_damage_bonus: "hydro_damage_bonus",
  pyro_damage_bonus: "pyro_damage_bonus",
  cryo_damage_bonus: "cryo_damage_bonus",
  physical_damage_bonus: "physical_damage_bonus",
});

export type GenshinArtifactMainStat = z.infer<typeof GenshinArtifactMainStatSchema>;

export const GenshinArtifactSubStatSchema = z.nativeEnum({
  atk: "atk",
  hp: "hp",
  def: "def",
  atk_percent: "atk_percent",
  hp_percent: "hp_percent",
  def_percent: "def_percent",
  elemental_mastery: "elemental_mastery",
  energy_recharge: "energy_recharge",
  crit_rate: "crit_rate",
  crit_damage: "crit_damage",
});

export type GenshinArtifactSubStat = z.infer<typeof GenshinArtifactSubStatSchema>;