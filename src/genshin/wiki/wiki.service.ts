import { GenshinCharacterEntity } from '@/entities/genshin/character/character.entity';
import { GenshinCharacterInfoEntity } from '@/entities/genshin/character/info.entity';
import { GenshinCountryEntity } from '@/entities/genshin/country.entity';
import { GenshinElementEntity } from '@/entities/genshin/element.entity';
import { GenshinWeaponTypeEntity } from '@/entities/genshin/weapons/weapon_type';
import { getCharacters, GetCharactersDto, WikiCharacters } from '@/types/genshin/hoyowiki/data';
import { WikiDataSchema } from '@/types/genshin/schema';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetCharacterInfoByNameDto, GetCharacterInfoDto, SaveCharacterDto } from './wiki.dto';
import { z } from 'zod';

@Injectable()
export class WikiService {
  constructor(
    @InjectRepository(GenshinCharacterEntity)
    private readonly characterRepository: Repository<GenshinCharacterEntity>,

    @InjectRepository(GenshinCharacterInfoEntity)
    private readonly characterInfoRepository: Repository<GenshinCharacterInfoEntity>,

    @InjectRepository(GenshinElementEntity)
    private readonly elementRepository: Repository<GenshinElementEntity>,

    @InjectRepository(GenshinCountryEntity)
    private readonly countryRepository: Repository<GenshinCountryEntity>,

    @InjectRepository(GenshinWeaponTypeEntity)
    private readonly weaponTypeRepository: Repository<GenshinWeaponTypeEntity>,
  ) { }

  async getData(options: GetCharactersDto) {
    const data = await getCharacters(options);
    for (const characterdata of data) {
      const { character, country, element, weaponType } = characterdata;

      const existingElement = await this.elementRepository.findOne({
        where: { slug: element.slug }
      });
      const existingCharacter = await this.characterRepository.findOne({
        where: { slug: character.slug }
      });
      const existingCountry = await this.countryRepository.findOne({
        where: { slug: country.slug }
      });
      const existingWeaponType = await this.weaponTypeRepository.findOne({
        where: { slug: weaponType.slug }
      });

      if (!existingElement) {
        await this.elementRepository.save(this.elementRepository.create(element));
      }
      else {
        await this.elementRepository.update(existingElement.id, element);
      }
      if (!existingCharacter) {
        await this.characterRepository.save(this.characterRepository.create(character));
      }
      else {
        await this.characterRepository.update(existingCharacter.id, character);
      }
      if (!existingCountry) {
        await this.countryRepository.save(this.countryRepository.create(characterdata.country));
      }
      else {
        await this.countryRepository.update(existingCountry.id, characterdata.country);
      }

      if (!existingWeaponType) {
        await this.weaponTypeRepository.save(this.weaponTypeRepository.create(weaponType));
      }
      else {
        await this.weaponTypeRepository.update(existingWeaponType.id, weaponType);
      }
    }
    return data;
  }

  async getInfo({ entry_page_id }: GetCharacterInfoDto) {
    const data = await fetch(`https://sg-wiki-api-static.hoyolab.com/hoyowiki/genshin/wapi/entry_page?entry_page_id=${entry_page_id}`, {
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

    const json = await data.json();

    try {
      const parsed = formatJson(json);

      const entity = GenshinCharacterInfoEntity.create({
        data: parsed,
        slug: parsed.data.page.name
      });

      const existing = await this.characterRepository.findOne({
        where: { slug: entity.slug }
      });

      if (!existing) {
        return await this.characterRepository.update(existing.id, entity);
      }
      else {
        return await entity.save();
      }
    }
    catch (e) {
      return e.message;
    }

  }

  async getCharacters() {
    return await this.characterRepository.find({
      order: {
        createdAt: 'ASC'
      }
    });
  }

  async getCharacterByName(dto: GetCharacterInfoByNameDto) {
    return await this.characterRepository.findOne({
      where: {
        slug: dto.name
      }
    })
  }

  async getCharacterInfoByName(dto: GetCharacterInfoByNameDto) {
    const json = await this.characterInfoRepository.findOne({
      where: {
        slug: dto.name
      }
    });
    return formatJson(json);
  }

  async saveAll(dto: SaveCharacterDto) {
    const { limit, page } = dto;
    const characters = await this.characterRepository.find({
      take: parseInt(limit),
      skip: parseInt(page)
    });

    try {
      const data: any[] = [];

      for (const character of characters) {
        const info = await this.getInfo({
          entry_page_id: character.entry_page_id
        });

        if (this.characterInfoRepository.findOne({
          where: {
            slug: info.slug
          }
        })) {
          const res = await this.characterInfoRepository.update(info.id, info);
          data.push(res);
        }
        else {
          const res = await this.characterInfoRepository.save(info);
          data.push(res);
        }
      }

      return data;
    }
    catch (e) {
    }
  }
}

function formatJson(data: any): any {
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