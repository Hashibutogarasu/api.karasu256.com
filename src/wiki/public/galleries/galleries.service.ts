import { Gallery } from '@/entities/common/galleries.entity';
import { IBasePublicCaS } from '@/types/ibase_public_cas';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetOneDto, GetParamsDto } from '@/utils/dto';
import { getSchema } from './galleries.dto';

@Injectable()
export class GalleriesService implements IBasePublicCaS<Gallery> {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleryRepository: Repository<Gallery>,
  ) { }

  async getAll(): Promise<Gallery[]> {
    return await this.galleryRepository.find();
  }

  async get(query: GetParamsDto<Gallery, ["character", "createdAt", "updatedAt"]>): Promise<Gallery[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { take, skip, ...ref } = parsed.data;

    return await this.galleryRepository.find({
      where: {
        ...ref,
      },
      take: take,
      skip: skip,
    });
  }

  async getOne(query: GetOneDto<Gallery>): Promise<Gallery> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    return await this.galleryRepository.findOne({
      where: {
        ...query,
      },
    });
  }
}
