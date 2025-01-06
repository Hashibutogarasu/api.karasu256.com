import { GenshinCountryEntity } from '@/entities/genshin/country.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto, DeleteCountryDto, FindCountryDto, UpdateCountryDto } from './countries.dto';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(GenshinCountryEntity)
    private readonly countryRepository: Repository<GenshinCountryEntity>,
  ) { }

  async find() {
    return await this.countryRepository.find();
  }

  async findBySlug(dto: FindCountryDto) {
    return await this.countryRepository.findOne({
      where: {
        slug: dto.slug,
      }
    });
  }

  async create(dto: CreateCountryDto) {
    const data = await this.countryRepository.findOne({
      where: {
        slug: dto.slug,
      }
    });

    if (data) {
      throw new HttpException('Country already exists', 400);
    }

    return this.countryRepository.save(dto);
  }

  async update(dto: UpdateCountryDto) {
    const data = await this.countryRepository.findOne({
      where: {
        id: dto.id,
      }
    });

    if (!data) {
      throw new HttpException('Country not found', 404);
    }

    return this.countryRepository.save(dto);
  }

  async delete(dto: DeleteCountryDto) {
    return this.countryRepository.delete(dto.id);
  }
}
