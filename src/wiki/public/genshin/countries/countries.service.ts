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

  async getAll(): Promise<Country[]> {
    return await this.repository.find({
      relations: {
        version: true,
      },
    });
  }

  async get(query: GetParamsDto<Country, ["createdAt", "updatedAt"]>): Promise<Country[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { version, characters, take, skip, ...ref } = query;

    return await this.repository.find({
      where: {
        ...ref,
        version: {
          id: version.id
        },
        ...characters
      },
      take: take ?? 10,
      skip: skip ?? 0,
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

    const { take, skip, version, ...ref } = query;

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
