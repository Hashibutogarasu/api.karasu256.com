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
    return await this.charactersService.find({
      where: dto,
    });
  }

  async create(dto: CreateCharacterDto): Promise<Character> {
    return await this.charactersService.save(dto);
  }

  async update(dto: UpdateCharacterDto): Promise<void> {
    if (!dto.id) {
      throw new Error('id is required');
    }

    const character = await this.charactersService.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    await this.charactersService.update(dto.id, dto);
  }

  async delete(dto: DeleteCharacterDto): Promise<void> {
    if (!dto.id) {
      throw new Error('id is required');
    }

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
