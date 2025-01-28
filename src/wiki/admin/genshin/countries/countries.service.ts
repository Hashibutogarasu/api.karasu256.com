import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCountryDto, createCountrySchema, DeleteCountryDto, GetCountriesDto, GetCountriesParamsDto, getCountriesParamsSchema, getCountriesSchema, UpdateCountryDto } from './contries.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from '@/entities/genshin/wiki/countries.entity';
import { Repository } from 'typeorm';

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

    const { page, limit, ...ref } = params;

    return await this.repository.find({
      where: {
        ...ref,
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
    });
  }

  async getOne(params: GetCountriesParamsDto): Promise<any> {
    const parsed = getCountriesParamsSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    return await this.repository.findOne({
      where: {
        id: params.id,
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

    return await this.repository.save(dto);
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

    await this.repository.update(dto.id, dto);
  }

  async delete(dto: DeleteCountryDto): Promise<void> {
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

    await this.repository.delete(dto.id);
  }
}
