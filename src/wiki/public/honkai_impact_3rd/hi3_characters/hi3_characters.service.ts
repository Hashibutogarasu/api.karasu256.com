import { HI3Characters } from '@/entities/wiki/hi3/hi3_characters.entity';
import { IBasePublicCaS } from '@/types/ibase_public_cas';
import { GetOneDto, GetParamsDto } from '@/utils/dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class Hi3CharactersService implements IBasePublicCaS<HI3Characters> {
  constructor(
    @InjectRepository(HI3Characters)
    private readonly hi3CharactersRepository: Repository<HI3Characters>
  ) { }

  async getAll(): Promise<HI3Characters[]> {
    return await this.hi3CharactersRepository.find();
  }

  async get(query: GetParamsDto<HI3Characters, ["createdAt", "updatedAt"]>): Promise<HI3Characters[]> {
    const { take, skip, weapons, stigmatas, skills, ...ref } = query;

    return await this.hi3CharactersRepository.find({
      where: {
        ...query,
        weapons: Array.from(weapons).map((weapon) => ({ id: weapon.id })),
        stigmatas: Array.from(stigmatas).map((stigmata) => ({ id: stigmata.id })),
        skills: Array.from(skills).map((skill) => ({ id: skill.id }))
      },
      take: take || 10,
      skip: skip || 0
    });
  }

  async getOne(query: GetOneDto<HI3Characters>): Promise<HI3Characters> {
    const { weapons, stigmatas, skills, ...ref } = query;

    return await this.hi3CharactersRepository.findOne({
      where: {
        ...ref,
        weapons: Array.from(weapons).map((weapon) => ({ id: weapon.id })),
        stigmatas: Array.from(stigmatas).map((stigmata) => ({ id: stigmata.id })),
        skills: Array.from(skills).map((skill) => ({ id: skill.id }))
      }
    });
  }
}
