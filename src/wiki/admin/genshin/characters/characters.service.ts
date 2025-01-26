import { Character } from '@/entities/genshin/wiki/character.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterDto, DeleteCharacterDto, GetCharacterDto, UpdateCharacterDto } from './characters.dto';

@Injectable()
export class CharactersService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Character)
    private readonly charactersService: Repository<Character>
  ) { }

  async get(dto: GetCharacterDto): Promise<Character[]> {
    const { country, ...ref } = dto;
    return await this.charactersService.find({
      where: {
        ...ref,
        country: {
          name: country,
        },
      },
    });
  }

  async create(dto: CreateCharacterDto): Promise<Character> {
    const { country, ...ref } = dto;

    const countryExists = await this.charactersService.findOne({
      where: {
        name: country,
      },
    });

    if (!countryExists) {
      throw new NotFoundException('Country not found');
    }

    return await this.charactersService.save({
      ...ref,
      country: countryExists,
    });
  }

  async update(dto: UpdateCharacterDto): Promise<void> {
    const { country, ...ref } = dto;

    const countryExists = await this.charactersService.findOne({
      where: {
        name: country,
      },
    });

    if (!countryExists) {
      throw new NotFoundException('Country not found');
    }

    const character = await this.charactersService.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    await this.charactersService.update(dto.id, {
      ...ref,
      country: countryExists,
    });
  }

  async delete(dto: DeleteCharacterDto): Promise<void> {
    const character = await this.charactersService.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    await this.charactersService.delete(dto.id);
  }
}
