import { GenshinCharacterEntity } from '@/entities/genshin/character.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterDto, DeleteCharacterDto, FindCharacterDto, UpdateCharacterDto } from './characters.dto';
import { GenshinCountryEntity } from '@/entities/genshin/country.entity';
import { z } from 'zod';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(GenshinCharacterEntity)
    private readonly characterRepository: Repository<GenshinCharacterEntity>,

    @InjectRepository(GenshinCountryEntity)
    private readonly countryRepository: Repository<GenshinCountryEntity>,
  ) { }

  async create(dto: CreateCharacterDto) {
    const data = await this.characterRepository.findOne({
      where: {
        slug: dto.slug
      }
    });

    if (data) {
      throw new HttpException('Character already exists', 400);
    }

    return await this.characterRepository.save({
      name: dto.name,
      slug: dto.slug,
      description: dto.description,
      weaponType: dto.weaponType,
      image: dto.image,
      element: {
        slug: dto.element
      },
      country: {
        id: dto.countryId
      },
    });
  }

  async update(dto: UpdateCharacterDto) {
    const data = await this.characterRepository.findOne({
      where: {
        id: dto.id
      }
    });

    if (!data) {
      throw new HttpException('Character not found', 404);
    }

    const { id, ...updateData } = dto;

    for (const key in updateData) {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    }

    const { element, ...rest } = updateData;

    return await this.characterRepository.save({
      id: dto.id,
      element: {
        slug: element
      },
      ...rest,
    });
  }

  async delete(dto: DeleteCharacterDto) {
    return await this.characterRepository.delete({
      id: dto.id
    });
  }

  async find(dto: FindCharacterDto) {
    const { id, countryId, element, rarity, slug, ...rest } = dto;

    try {
      if (id) {
        z.string().uuid().parse(id);
      }

      if (countryId) {
        z.string().uuid().parse(countryId);
      }
    }
    catch (e) {
      throw new HttpException('Invalid id format', 400);
    }

    if (rarity && !/^\d+$/.test(rarity.toString())) {
      throw new HttpException('Invalid rarity format', 400);
    }

    const country = await this.countryRepository.findOne({
      where: {
        id: dto.countryId
      }
    });

    if (!country) {
      throw new HttpException('Country not found', 404);
    }

    return await this.characterRepository.find({
      where: {
        id,
        rarity: rarity as any,
        element: {
          slug: element
        },
        ...rest
      }
    });
  }

  async findByElementSlug(slug: string) {
    return await this.characterRepository.find({
      where: {
        element: {
          slug
        }
      }
    });
  }

  async findBySlug(slug: string) {
    return await this.characterRepository.findOne({
      where: {
        slug
      }
    }) || {
      message: 'Character not found'
    }
  }
}
