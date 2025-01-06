import { GenshinElementEntity } from '@/entities/genshin/element.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateElementDto, DeleteElementDto, FindElementDto, UpdateElementDto } from './elements.dto';

@Injectable()
export class ElementsService {
  constructor(
    @InjectRepository(GenshinElementEntity)
    private readonly elementRepository: Repository<GenshinElementEntity>,
  ) { }

  async create(element: CreateElementDto) {
    const data = await this.elementRepository.findOne({
      where: {
        slug: element.slug,
      },
    });

    if (data) {
      throw new HttpException('Element already exists', 400);
    }

    return await this.elementRepository.save(element);
  }

  async update(element: UpdateElementDto) {
    const data = await this.elementRepository.findOne({
      where: {
        slug: element.slug,
      },
    });

    if (!data) {
      throw new HttpException('Element does not exist', 400);
    }

    return await this.elementRepository.save(element);
  }

  async delete({ id }: DeleteElementDto) {
    const data = await this.elementRepository.findOne({
      where: {
        id,
      },
    });

    if (!data) {
      throw new HttpException('Element does not exist', 400);
    }

    return await this.elementRepository.delete({
      id,
    });
  }

  async find(dto: FindElementDto) {
    return await this.elementRepository.find({
      where: {
        ...dto,
      },
    });
  }

  async findAll() {
    return await this.elementRepository.find();
  }

  async findByName({ name }: FindElementDto) {
    return await this.elementRepository.findOne({
      where: {
        name,
      },
    });
  }
}
