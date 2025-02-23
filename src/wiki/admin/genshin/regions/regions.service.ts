import { Country } from '@/entities/wiki/genshin/countries.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSchema, updateSchema } from './regions.dto';

@Injectable()
export class RegionsService implements IBaseAdminCaS<Country>{
  constructor(
    @InjectRepository(Country)
    private readonly regionsRepository: Repository<Country>
  ) { }

  async create(dto: CreateDto<any>): Promise<Country> {
    const { ...ref } = createSchema.safeParse(dto).data;

    return await this.regionsRepository.save(ref);
  }

  async update(dto: UpdateDto<Country>): Promise<void> {
    const { ...ref } = updateSchema.safeParse(dto).data;

    await this.regionsRepository.update(dto.id, ref);
  }
  
  async delete(dto: DeleteDto): Promise<void> {
    await this.regionsRepository.delete(dto.id);
  }
}
