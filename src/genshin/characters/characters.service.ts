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
    if (await this.characterRepository.findOne({
      where: {
        slug: dto.slug
      }
    })) {
      throw new HttpException('Character already exists', 400);
    }

    const { element, country, weaponType, ...createData } = dto;

    return await this.characterRepository.save({
      element: {
        slug: element
      },
      ...createData
    });
  }

  async update(dto: UpdateCharacterDto) {
    if (!await this.characterRepository.findOne({
      where: {
        id: dto.id
      }
    })) {
      throw new HttpException('Character not found', 404);
    }

    const { id, ...updateData } = dto;

    for (const key in updateData) {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    }

    const { element, country, weaponType, ...rest } = updateData;

    return await this.characterRepository.save({
      id: dto.id,
      element: {
        slug: element
      },
      country: {
        slug: country
      },
      weaponType: {
        slug: weaponType
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
    const { id, country, weaponType, element, slug, ...rest } = dto;

    try {
      if (id) {
        z.string().uuid().parse(id);
      }
    }
    catch (e) {
      throw new HttpException('Invalid id format', 400);
    }

    if (!await this.countryRepository.findOne({
      where: {
        slug: country
      }
    })) {
      throw new HttpException('Country not found', 404);
    }

    return await this.characterRepository.find({
      where: {
        id,
        element: {
          slug: element
        },
        country: {
          slug: country
        },
        weaponType: {
          slug: weaponType
        },
        slug,
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
