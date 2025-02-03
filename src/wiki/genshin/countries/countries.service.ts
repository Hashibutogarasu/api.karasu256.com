import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from '@/entities/genshin/wiki/countries.entity';
import { Repository } from 'typeorm';
import { CreateDto, DeleteDto, deleteSchema, GetParamsDto, UpdateDto } from '@/utils/dto';
import { createSchema, getSchema } from './contries.dto';

@Injectable()
export class CountriesService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Country)
    private readonly repository: Repository<Country>,
  ) { }

  async get(query: GetParamsDto<Country, ["createdAt", "updatedAt"]>): Promise<Country[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { page, limit, characters, version, ...ref } = query;

    return await this.repository.find({
      where: {
        ...ref,
        version: {
          version_string: version.version_string,
        }
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
    });
  }

  async getOne(query: GetParamsDto<Country, ["characters", "createdAt", "updatedAt"]>): Promise<Country> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { page, limit, ...ref } = query;

    return await this.repository.findOne({
      where: {
        ...ref,
        version: {
          version_string: query.version.version_string,
        }
      },
    });
  }

  async create(dto: CreateDto<Country>): Promise<Country> {
    const parsed = createSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const countryExists = await this.repository.findOne({
      where: {
        name: dto.name,
      },
    });

    if (countryExists) {
      throw new BadRequestException('この国は既に存在しています');
    }

    const versionExists = await this.repository.findOne({
      where: {
        version: {
          version_string: dto.version.version_string,
        }
      },
    });

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    const { version, characters, ...ref } = dto;

    return await this.repository.save({
      ...ref,
      version: versionExists,
    });
  }

  async update(dto: UpdateDto<Country>): Promise<void> {
    const parsed = createSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { version, characters, ...ref } = dto;

    const country = await this.repository.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!country) {
      throw new BadRequestException('この国は存在しません');
    }

    const versionExists = await this.repository.findOne({
      where: {
        version: {
          version_string: dto.version.version_string,
        }
      },
    });

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    await this.repository.update(dto.id, {
      ...ref,
      version: versionExists,
    });
  }

  async delete(dto: DeleteDto): Promise<void> {
    const parsed = deleteSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const country = await this.repository.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!country) {
      throw new BadRequestException('この国は存在しません');
    }

    await this.repository.delete(dto.id);
  }
}
