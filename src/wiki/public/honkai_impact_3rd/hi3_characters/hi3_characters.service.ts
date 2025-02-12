import { HI3Characters } from '@/entities/wiki/hi3/hi3_characters.entity';
import { IBasePublicCaS } from '@/types/ibase_public_cas';
import { GetParamsDto } from '@/utils/dto';
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

  async get(query: GetParamsDto<HI3Characters, ["skills", "stigmatas", "weapons", "createdAt", "updatedAt"]>): Promise<HI3Characters[]> {
    const { take, skip, ...ref } = query;

    return await this.hi3CharactersRepository.find({
      where: ref,
      take,
      skip
    });
  }

  async getOne(query: GetParamsDto<HI3Characters, ["skills", "stigmatas", "weapons", "createdAt", "updatedAt"]>): Promise<HI3Characters> {
    return await this.hi3CharactersRepository.findOne({
      where: query
    });
  }
}
