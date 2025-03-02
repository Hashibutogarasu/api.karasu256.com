import { GameCharacter } from '@/entities/wiki/game_character';
import { DeleteDto } from '@/utils/dto';
import { CreateCharacterDto, createCharacterSchema, UpdateCharacterDto } from '@/wiki/wiki.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GameCharactersService {
  constructor(
    @InjectRepository(GameCharacter)
    private readonly gameCharacterRepository: Repository<GameCharacter>
  ) { }

  async create(dto: CreateCharacterDto) {
    const parsed = createCharacterSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors.map((e) => e.message).join("\n"));
    }

    const character = new GameCharacter();
    character.setData(parsed.data);

    return await this.gameCharacterRepository.save(character);
  }

  async update(dto: UpdateCharacterDto) {
    const parsed = createCharacterSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors.map((e) => e.message).join("\n"));
    }

    const character = new GameCharacter();
    character.setData(parsed.data);

    return await this.gameCharacterRepository.update(dto.id, character);
  }

  async delete(dto: DeleteDto) {
    return await this.gameCharacterRepository.delete(dto.id);
  }

  async findAll() {
    return await this.gameCharacterRepository.find();
  }

  async findOne(id: string) {
    return await this.gameCharacterRepository.findOne({
      where: {
        id
      }
    });
  }
}
