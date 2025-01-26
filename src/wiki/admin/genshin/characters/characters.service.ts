import { Character } from '@/entities/genshin/wiki/character.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterDto, createCharacterSchema, DeleteCharacterDto, deleteCharacterSchema, GetCharacterDto, GetCharacterPaginateDto, GetCharacterParamsDto, getCharacterParamsSchema, getCharacterSchema, UpdateCharacterDto, updateCharacterSchema } from './characters.dto';

@Injectable()
export class CharactersService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Character)
    private readonly charactersService: Repository<Character>
  ) { }

  async get(dto: GetCharacterDto): Promise<Character[]> {
    const parsed = getCharacterSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { page, limit, country, ...ref } = dto;
    return await this.charactersService.find({
      where: {
        ...ref,
        country: {
          name: country,
        },
      },
      skip: (page - 1) * limit,
      relations: {
        country: true,
      }
    });
  }

  async getOne(params: GetCharacterParamsDto): Promise<Character> {
    const parsed = getCharacterParamsSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    return await this.charactersService.findOne({
      where: {
        id: params.id,
      },
      relations: {
        country: true,
      }
    });
  }

  async create(dto: CreateCharacterDto): Promise<Character> {
    const parsed = createCharacterSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

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
    const parsed = updateCharacterSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

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
    const parsed = deleteCharacterSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
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
