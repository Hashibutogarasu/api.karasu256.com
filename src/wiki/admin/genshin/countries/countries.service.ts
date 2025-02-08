import { Country } from '@/entities/wiki/genshin/countries.entity';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { CreateDto, DeleteDto, deleteSchema, UpdateDto } from '@/utils/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSchema, updateSchema } from './countries.dto';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private readonly repository: Repository<Country>,

    @InjectRepository(VersionsEntity)
    private readonly versionsRepository: Repository<VersionsEntity>
  ) { }

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
    const parsed = updateSchema.safeParse(dto);

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

    const versionExists = await this.versionsRepository.findOne({
      where: {
        version_string: dto.version.version_string,
      },
    });

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    await this.repository.update(dto.id, {
      ...ref,
      version: {
        id: versionExists.id,
      },
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
