import { GenshinCharacterEntity } from "@/entities/genshin/character/character.entity";
import { GenshinCountryEntity } from "@/entities/genshin/country.entity";
import { GenshinElementEntity } from "@/entities/genshin/element.entity";
import { GenshinWeaponTypeEntity } from "@/entities/genshin/weapons/weapon_type";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

/**
 * {"filters":[],"menu_id":"2","page_num":1,"page_size":30,"use_es":true}
 */
export const GetCharactersSchema = z.object({
  filters: z.array(z.any()),
  menu_id: z.string(),
  page_num: z.number().default(1),
  page_size: z.number().default(30),
  use_es: z.boolean().default(true),
});

export class GetCharactersDto extends createZodDto(GetCharactersSchema) { }

export const value_types = z.array(z.object({
  id: z.number(),
  value: z.string(),
  mi18n_key: z.string(),
  icon: z.string(),
  enum_string: z.string(),
}));

export class WikiValueTypes extends createZodDto(value_types) { }

export const character_vision = z.object({
  values: z.array(z.string()),
  value_types: value_types,
});

export class WikiCharacterVision extends createZodDto(character_vision) { }

export const filter_values = z.object({
  character_vision: character_vision,
  character_rarity: z.object({
    values: z.array(z.string()),
    value_types: value_types,
  }),
  character_region: z.object({
    values: z.array(z.string()),
    value_types: value_types,
  }),
  character_weapon: z.object({
    values: z.array(z.string()),
    value_types: value_types
  }),
  key: z.any(),
});

export class WikiFilterValues extends createZodDto(filter_values) { }

export const WikiCharactersSchema = z.object({
  entry_page_id: z.string(),
  name: z.string(),
  icon_url: z.string(),
  display_field: z.any(),
  filter_values: filter_values,
  desc: z.string(),
});

export class WikiCharacters extends createZodDto(WikiCharactersSchema) { }

export const WikiResponseSchema = z.object({
  retcode: z.number(),
  message: z.string(),
  data: z.object({
    list: z.array(WikiCharactersSchema),
  }),
});

export class WikiResponse extends createZodDto(WikiResponseSchema) { }

export async function getCharacters(
  options: GetCharactersDto
) {
  const url = 'https://sg-wiki-api.hoyolab.com/hoyowiki/genshin/wapi/get_entry_page_list';
  const req = JSON.stringify(options);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'ja,en-US;q=0.7,en;q=0.3',
      'x-rpc-language': 'ja-jp',
      'x-rpc-wiki_app': 'genshin',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
    },
    mode: 'cors',
    referrer: 'https://wiki.hoyolab.com/',
    body: req,
  });

  const text = await response.json();

  const characters = text as WikiResponse;

  return characters.data.list.map((character) => {
    const { name, icon_url, entry_page_id } = character;
    const rarity = character.filter_values.character_rarity ? parseInt(character.filter_values.character_rarity.values[0].replace('★', '')) : 4;
    const element = character.filter_values.character_vision ? character.filter_values.character_vision.values[0] : 'unknown';
    const { enum_string } = character.filter_values.character_vision ? character.filter_values.character_vision.value_types.find((x) => x.value === element) : { enum_string: "unknown" };
    const country = character.filter_values.character_region ? character.filter_values.character_region.values[0] : 'unknown';
    const weapon = character.filter_values.character_weapon ? character.filter_values.character_weapon.values[0] : 'unknown';

    return {
      character: GenshinCharacterEntity.create({
        entry_page_id,
        slug: name,
        name,
        rarity,
        image: icon_url,
      }),
      element: GenshinElementEntity.create({
        slug: enum_string ? enum_string : element,
        name: element,
      }),
      weaponType: GenshinWeaponTypeEntity.create({
        slug: weapon,
        name: weapon,
        description: null,
      }),
      country: GenshinCountryEntity.create({
        slug: country,
        name: country,
      }),
    };
  });
}
