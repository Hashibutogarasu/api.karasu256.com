import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCountryDto, createCountrySchema, GetCountriesDto, getCountriesSchema, UpdateCountryDto } from './contries.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from '@/entities/genshin/wiki/countries.entity';
import { Repository } from 'typeorm';
import { DeleteDto, deleteSchema, GetParamsDto, getParamsSchema } from '@karasu-lab/karasu-lab-sdk';

@Injectable()
export class CountriesService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Country)
    private readonly repository: Repository<Country>,
  ) { }

  async get(params: GetCountriesDto): Promise<any[]> {
    const parsed = getCountriesSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { page, limit, version, ...ref } = params;

    return await this.repository.find({
      where: {
        ...ref,
        version: {
          version_string: version,
        },
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
    });
  }

  async getOne(params: GetParamsDto): Promise<any> {
    const parsed = getParamsSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    return await this.repository.findOne({
      where: {
        id: params,
      },
    });
  }

  async create(dto: CreateCountryDto): Promise<any> {
    const parsed = createCountrySchema.safeParse(dto);

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
          version_string: dto.version,
        }
      },
    });

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    return await this.repository.save({
      ...dto,
      version: versionExists,
    });
  }

  async update(dto: UpdateCountryDto): Promise<void> {
    const parsed = createCountrySchema.safeParse(dto);

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

    const versionExists = await this.repository.findOne({
      where: {
        version: {
          version_string: dto.version,
        }
      },
    });

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    await this.repository.update(dto.id, {
      ...dto,
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
