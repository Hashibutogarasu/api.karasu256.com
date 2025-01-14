/* eslint-disable @typescript-eslint/no-require-imports */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RelationMap } from 'typeorm-relations';
import { CharacterEntity, CharacterEntitySchema } from '@/entities/genshin/wiki/character.entity';
import { CharacterPostExt } from '@/entities/genshin/wiki/character_data/character_page/character_ext/character_postext.entity';
import { CharacterExt } from '@/entities/genshin/wiki/character_data/character_page/character_ext/character_ext.entity';
import { CharacterModules } from '@/entities/genshin/wiki/character_data/character_page/character_modules.entity';
import { CharacterFilterValues } from '@/entities/genshin/wiki/character_data/character_page/character_filtervalues/character_filtervalues/character_filtervalues.entity';
import { CharacterPage } from '@/entities/genshin/wiki/character_data/character_page/character_page.entity';
import { CharacterFilterValue } from '@/entities/genshin/wiki/character_data/character_page/character_filter_value';
import { CharacterValueType } from '@/entities/genshin/wiki/character_data/character_page/character_value_type.entity';
import { CharacterKey } from '@/entities/genshin/wiki/character_data/character_page/character_key.entity';
import { CharacterData } from '@/entities/genshin/wiki/character_data/character_data.entity';
import { CharacterComponents } from '@/entities/genshin/wiki/character_data/character_page/character_components.entity';
import { CharacterListDataEntity } from '@/entities/genshin/wiki/character/character_data.entity';
import { z } from 'zod';
import { CharacterListEntity } from '@/entities/genshin/wiki/character/character_list.entity';
import { CharacterInfo, CharacterInfoSchema } from '@/entities/genshin/wiki/character_info.entity';
import { GetCharacterInfoByNameDto, GetCharacterInfoDto, GetEntryPageListDto } from './characters.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(CharacterEntity)
    private readonly characterRepository: Repository<CharacterEntity>,

    @InjectRepository(CharacterListEntity)
    private readonly characterListRepository: Repository<CharacterListEntity>,

    @InjectRepository(CharacterPostExt)
    private readonly characterPostExtRepository: Repository<CharacterPostExt>,

    @InjectRepository(CharacterExt)
    private readonly characterExtRepository: Repository<CharacterExt>,

    @InjectRepository(CharacterModules)
    private readonly characterModulesRepository: Repository<CharacterModules>,

    @InjectRepository(CharacterFilterValues)
    private readonly characterFilterValuesRepository: Repository<CharacterFilterValues>,

    @InjectRepository(CharacterPage)
    private readonly characterPageRepository: Repository<CharacterPage>,

    @InjectRepository(CharacterData)
    private readonly characterDataRepository: Repository<CharacterData>,

    @InjectRepository(CharacterInfo)
    private readonly characterInfoRepository: Repository<CharacterInfo>,

    @InjectRepository(CharacterFilterValue)
    private readonly characterFilterValueRepository: Repository<CharacterFilterValue>,

    @InjectRepository(CharacterValueType)
    private readonly characterValueTypeRepository: Repository<CharacterValueType>,

    @InjectRepository(CharacterKey)
    private readonly characterKeyRepository: Repository<CharacterKey>,
  ) { }

  async getEntryPageList(dto: GetEntryPageListDto) {
    const res = await fetch('https://sg-wiki-api.hoyolab.com/hoyowiki/genshin/wapi/get_entry_page_list', {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'ja, en-US;q=0.7, en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'x-rpc-language': 'ja-jp',
        'x-rpc-wiki_app': 'genshin',
        'Origin': 'https://wiki.hoyolab.com',
        'Connection': 'keep-alive',
        'Referer': 'https://wiki.hoyolab.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'TE': 'trailers',
      },
      body: JSON.stringify({
        ...dto
      })
    });
    const json = formatJson(await res.json() as z.infer<typeof CharacterEntitySchema>);
    const characters = await this.flatMap(json.data.list.map(async (character) => {
      return await CharacterListEntity.create({
        ...character
      }).save();
    }));

    const data = CharacterListDataEntity.create({
      list: characters,
      total: json.data.total,
    });

    const character = CharacterEntity.create({
      retcode: json.retcode,
      message: json.message,
      data: await data.save()
    });

    await character.save();

    return json;
  }

  async getInfo({ entry_page_id }: GetCharacterInfoDto) {
    const res = await fetch(`https://sg-wiki-api-static.hoyolab.com/hoyowiki/genshin/wapi/entry_page?entry_page_id=${entry_page_id}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'ja, en-US;q=0.7, en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'x-rpc-language': 'ja-jp',
        'x-rpc-wiki_app': 'genshin',
        'Origin': 'https://wiki.hoyolab.com',
        'Connection': 'keep-alive',
        'Referer': 'https://wiki.hoyolab.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'TE': 'trailers',
      }
    });

    const json = formatJson(await res.json());
    // const json = formatJson(example as z.infer<typeof CharacterInfoSchema>);

    try {
      const parsed = CharacterInfoSchema.parse(json);

      if (parsed.data == null) {
        throw new HttpException('キャラクターが見つかりませんでした', 404);
      }

      if (await this.characterPageRepository.findOne({
        where: {
          name: parsed.data.page.name
        }
      })) {
        throw new HttpException('そのキャラクターは既に存在しています', 201);
      }

      const { ...postExt } = parsed.data.page.ext.post_ext;
      const { ...ext } = parsed.data.page.ext;
      const { ...character_property } = parsed.data.page.filter_values.character_property;
      const { ...character_rarity } = parsed.data.page.filter_values.character_rarity;
      const { ...character_region } = parsed.data.page.filter_values.character_region;
      const { ...character_vision } = parsed.data.page.filter_values.character_vision;
      const { ...filter_values } = parsed.data.page.filter_values;
      const { ...character_weapon } = parsed.data.page.filter_values.character_weapon;
      const { ...page } = parsed.data.page;
      const { ...data } = parsed.data;
      const { ...info } = parsed;

      const characterPostExt = CharacterPostExt.create({
        post_id: postExt.post_id,
        post_user_name: postExt.post_user_name,
        post_time: postExt.post_time,
        post_avatar_url: postExt.post_avatar_url,
        url: postExt.url
      });

      const characterExt = CharacterExt.create({
        fe_ext: ext.fe_ext,
        post_ext: ext.post_ext,
        server_ext: ext.server_ext,
        personalized_color: ext.personalized_color,
        scrolling_text: ext.scrolling_text,
        corner_mark: ext.corner_mark
      });

      const property_key = character_property.key !== null ? CharacterKey.create({
        key: character_property.key.key,
        text: character_property.key.text,
        values: character_property.key.values,
        mi18n_key: character_property.key.mi18n_key,
        is_multi_select: character_property.key.is_multi_select,
        hoyolab_id: character_property.key.id,
        is_hidden: character_property.key.is_hidden,
        updated_at: character_property.key.updated_at
      }) : undefined;

      const property_values = character_property.value_types.map((value_type) => {
        return CharacterValueType.create({
          hoyolab_id: value_type.id,
          value: value_type.value,
          mi18n_key: value_type.mi18n_key,
          icon: value_type.icon,
          enum_string: value_type.enum_string
        })
      });

      const characterProperty = CharacterFilterValue.create({
        values: character_property.values ?? [],
        key: property_key,
        value_types: property_values ?? [],
      });

      const rarity_values = character_rarity.value_types.map((value_type) => {
        return CharacterValueType.create({
          hoyolab_id: value_type.id,
          value: value_type.value,
          mi18n_key: value_type.mi18n_key,
          icon: value_type.icon,
          enum_string: value_type.enum_string,
        });
      });

      const rarity_key = character_rarity.key != null ? CharacterKey.create({
        key: character_rarity.key.key,
        text: character_rarity.key.text,
        values: character_rarity.key.values,
        mi18n_key: character_rarity.key.mi18n_key,
        is_multi_select: character_rarity.key.is_multi_select,
        hoyolab_id: character_rarity.key.id,
        is_hidden: character_rarity.key.is_hidden,
        updated_at: character_rarity.key.updated_at
      }) : undefined;

      const characterRarity = CharacterFilterValue.create({
        values: character_rarity.values ?? [],
        key: rarity_key,
        value_types: rarity_values
      });

      const region_values: CharacterValueType[] = character_region.value_types.map((value_type) => {
        return CharacterValueType.create({
          hoyolab_id: value_type.id,
          value: value_type.value,
          mi18n_key: value_type.mi18n_key,
          icon: value_type.icon,
          enum_string: value_type.enum_string
        });
      });

      const region_key = character_region.key !== null ? CharacterKey.create({
        key: character_region.key.key,
        text: character_region.key.text,
        values: character_region.key.values,
        mi18n_key: character_region.key.mi18n_key,
        is_multi_select: character_region.key.is_multi_select,
        hoyolab_id: character_region.key.id,
        is_hidden: character_region.key.is_hidden,
        updated_at: character_region.key.updated_at,
      }) : undefined;

      const characterRegion = CharacterFilterValue.create({
        values: character_region.values ?? [],
        key: region_key,
        value_types: region_values ?? [],
      });

      const vision_key = character_vision.key !== null ? CharacterKey.create({
        key: character_vision.key.key,
        text: character_vision.key.text,
        values: character_vision.key.values,
        mi18n_key: character_vision.key.mi18n_key,
        is_multi_select: character_vision.key.is_multi_select,
        hoyolab_id: character_vision.key.id,
        is_hidden: character_vision.key.is_hidden,
        updated_at: character_vision.key.updated_at,
      }) : null;

      const vison_values: CharacterValueType[] = character_vision.value_types.map((value_type) => {
        return CharacterValueType.create({
          hoyolab_id: value_type.id,
          value: value_type.value,
          mi18n_key: value_type.mi18n_key,
          icon: value_type.icon,
          enum_string: value_type.enum_string,
        });
      });

      const characterVision = vision_key ? CharacterFilterValue.create({
        values: character_vision.values ?? [],
        key: vision_key,
        value_types: vison_values ?? [],
      }) : null;

      const weapon_values: CharacterValueType[] = character_weapon.value_types.map((value_type) => {
        return CharacterValueType.create({
          hoyolab_id: value_type.id,
          value: value_type.value,
          mi18n_key: value_type.mi18n_key,
          icon: value_type.icon,
          enum_string: value_type.enum_string
        });
      });

      const weapon_key = character_weapon.key !== null ? CharacterKey.create({
        key: character_weapon.key.key,
        mi18n_key: character_weapon.key.mi18n_key,
        is_multi_select: character_weapon.key.is_multi_select,
        hoyolab_id: character_weapon.key.id,
        is_hidden: character_weapon.key.is_hidden,
        text: character_weapon.key.text,
        updated_at: character_weapon.key.updated_at,
        values: character_weapon.key.values,
      }) : undefined;

      const characterWeapon = CharacterFilterValue.create({
        values: character_weapon.values ?? [],
        key: weapon_key,
        value_types: weapon_values ?? [],
      });

      if (!await this.characterPostExtRepository.findOne({
        where: {
          ...characterPostExt
        }
      })) {
        await characterPostExt.save();
      }

      if (!await this.characterExtRepository.findOne({
        where: {
          ...characterExt
        }
      })) {
        await characterExt.save();
      }

      const characterFilterValues = CharacterFilterValues.create({
        character_rarity: characterRarity,
        character_property: characterProperty,
        character_vision: characterVision,
        character_weapon: characterWeapon,
        character_region: characterRegion,
      });

      const filtered = await this.flat(Object.keys(characterFilterValues).map(async (key) => {
        const values: CharacterFilterValue[] = [];
        const filterValue = characterFilterValues[key];
        if (filterValue !== null && filterValue.key !== null && filterValue !== undefined && filterValue.key !== undefined) {
          if (!await this.characterFilterValueRepository.findOne({
            where: {
              key: {
                hoyolab_id: filterValue.key.hoyolab_id
              }
            },
            relations: {
              key: true
            }
          })) {
            values.push(await filterValue.save());
          }
        }
        else {
          delete characterFilterValues[key];
        }

        return values;
      }));

      if (!await this.characterFilterValuesRepository.findOne({
        where: {
          character_rarity: {
            id: characterFilterValues.character_rarity ? characterFilterValues.character_rarity.id : undefined
          },
          character_property: {
            id: characterFilterValues.character_property ? characterFilterValues.character_property.id : undefined
          },
          character_vision: {
            id: characterFilterValues.character_vision ? characterFilterValues.character_vision.id : undefined
          },
          character_weapon: {
            id: characterFilterValues.character_weapon ? characterFilterValues.character_weapon.id : undefined
          },
          character_region: {
            id: characterFilterValues.character_region ? characterFilterValues.character_region.id : undefined
          }
        }
      })) {
        await this.characterFilterValuesRepository.save(filtered);
      }

      const characterModules: CharacterModules[] = parsed.data.page.modules.map((module) => {
        const components: CharacterComponents[] = module.components.map((component) => {
          return CharacterComponents.create({
            component_id: component.component_id,
            layout: component.layout,
            data: component.data,
            style: component.style,
          })
        }) ?? [];

        return CharacterModules.create({
          name: module.name,
          is_poped: module.is_poped,
          components: components,
          hoyolab_id: module.id,
          is_customize_name: module.is_customize_name,
          is_abstract: module.is_abstract,
          is_show_switch: module.is_show_switch,
          switch: module.switch,
          desc: module.desc,
          repeated: module.repeated,
          is_submodule: module.is_submodule,
          origin_module_id: module.origin_module_id,
          without_border: module.without_border,
          can_delete: module.can_delete,
          is_hidden: module.is_hidden,
          rich_text_editing: module.rich_text_editing,
        });
      }) ?? [];

      const modules = await this.flatMap(characterModules.map(async (module) => {
        if (Array.isArray(module.components)) {
          module.components.map(async (component) => {
            return await component.save();
          });
        }

        return await module.save();
      }));

      const characterPage = CharacterPage.create({
        ...page,
        modules: modules,
        filter_values: await characterFilterValues.save(),
        ext: await characterExt.save(),
      });

      const characterData = CharacterData.create({
        page: await characterPage.save()
      });

      const entity = CharacterInfo.create({
        retcode: parsed.retcode,
        message: parsed.message,
        data: await characterData.save()
      });

      return await entity.save();
    }
    catch (e) {
      return {
        error: e
      }
    }
  }

  async flat<T>(arr: Promise<T[]>[]): Promise<T[]> {
    return Promise.all(arr).then((values) => {
      return values.flat();
    });
  }

  async flatMap<T>(arr: Promise<T>[]): Promise<T[]> {
    return Promise.all(arr).then((values) => {
      return values.flatMap((value) => value);
    });
  }

  async getCharacters() {
    return await this.characterListRepository.find({
      order: {
        createdAt: 'ASC'
      }
    });
  }

  async getCharacterByName(dto: GetCharacterInfoByNameDto) {
    const characterListRelationMap = new RelationMap<CharacterListEntity>();
    return await this.characterListRepository.findOne({
      where: {
        name: dto.name
      },
      relations: characterListRelationMap.toFindOptionsRelations()
    })
  }

  async getCharacterInfoByName(dto: GetCharacterInfoByNameDto) {
    const { name } = dto;

    const characterInfoRelationMap = new RelationMap<CharacterInfo>({
      data: {
        page: {
          modules: true,
          filter_values: {
            character_property: {
              key: true,
              value_types: true
            },
            character_rarity: {
              key: true,
              value_types: true
            },
            character_vision: {
              key: true,
              value_types: true
            },
            character_region: {
              key: true,
              value_types: true
            },
            character_weapon: {
              key: true,
              value_types: true
            },
          },
          ext: {
            post_ext: true
          },
        },
      }
    });

    const json = await this.characterInfoRepository.findOne({
      where: {
        data: {
          page: {
            name: name
          }
        }
      },
      relations: characterInfoRelationMap.toFindOptionsRelations(),
    });
    return formatJson(json);
  }
}

function formatJson<T>(data: T): T {
  if (typeof data === 'string') {
    let json;
    if (data.startsWith('$')) {
      json = removeAndFormatObject(data);
    }
    else if (data.startsWith('[') || data.startsWith('{')) {
      try {
        const parsed = JSON.parse(data);
        json = formatJson(parsed);
      }
      catch (e) {
        json = data;
      }
    }
    else {
      json = data;
    }

    return json;
  }
  else if (typeof data === 'number' || typeof data === 'boolean') {
    return data;
  }

  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      try {
        //data[i]のキーバリューを再帰的に処理
        //TypeError: Cannot assign to read only property
        if (typeof data[i] === 'object' && data[i] !== null) {
          data[i] = formatJson(data[i]);
        }
        else if (typeof data[i] === 'string') {
          data[i] = removeAndFormatObject(data[i]);
        }
      }
      catch (e) {
        console.log(e);
      }
    }
    return data;
  }

  if (typeof data === 'object' && data !== null) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        data[key] = formatJson(data[key]);
      }
    }
    return JSON.parse(JSON.stringify(data));
  }

  return data;
}


function removeAndFormatObject(data: string) {
  const replaced = data.replace(/\$/g, '');
  const unescaped = replaced.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  try {
    return JSON.parse(unescaped);
  }
  catch {
    return unescaped;
  }
}