import { IBasePublicCaS } from '@/types/ibase_public_cas';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from '@/entities/wiki/genshin/countries.entity';
import { Repository } from 'typeorm';
import { GetParamsDto } from '@/utils/dto';
import { getSchema } from './contries.dto';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';

@Injectable()
export class CountriesService implements IBasePublicCaS<Country> {
  constructor(
    @InjectRepository(Country)
    private readonly repository: Repository<Country>,

    @InjectRepository(VersionsEntity)
    private readonly versionsRepository: Repository<VersionsEntity>
  ) { }

  async getAll({ take, skip }: { take: number; skip: number }): Promise<Country[]> {
    return await this.repository.find({
      take,
      skip,
    });
  }

  async get(query: GetParamsDto<Country, ["createdAt", "updatedAt"]>): Promise<Country[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { characters, version, ...ref } = parsed.data;

    return await this.repository.find({
      where: {
        ...ref,
        version: {
          id: version.id
        },
      },
      relations: {
        version: true,
      },
    });
  }

  async getOne(query: GetParamsDto<Country, ["characters", "createdAt", "updatedAt"]>): Promise<Country> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { characters, version, ...ref } = parsed.data;

    return await this.repository.findOne({
      where: {
        ...ref,
        version: version && {
          version_string: version.version_string,
        }
      },
      relations: {
        version: true,
      },
    });
  }
}
