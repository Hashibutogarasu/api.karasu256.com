import { GenshinCharacterEntity } from '@/entities/genshin/character.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterDto, DeleteCharacterDto, FindCharacterDto, UpdateCharacterDto } from './characters.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(GenshinCharacterEntity)
    private readonly characterRepository: Repository<GenshinCharacterEntity>,
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
      element: {
        id: dto.elementId
      },
      motifWeapon: {
        id: dto.weaponId
      },
      country: {
        id: dto.countryId
      },
      artifactSets: dto.artifactSetIds.map(id => ({
        id
      }))
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

    return await this.characterRepository.save({
      name: dto.name,
      slug: dto.slug,
      description: dto.description,
      element: {
        id: dto.elementId
      },
      motifWeapon: {
        id: dto.weaponId
      },
      country: {
        id: dto.countryId
      },
      artifactSets: dto.artifactSetIds.map(id => ({
        id
      }))
    });
  }

  async delete(dto: DeleteCharacterDto) {
    return await this.characterRepository.delete({
      id: dto.id
    });
  }

  async find(dto: FindCharacterDto) {
    return await this.characterRepository.find({
      where: dto
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
