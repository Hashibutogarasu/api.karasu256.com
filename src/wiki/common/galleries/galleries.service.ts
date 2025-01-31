import { Gallery } from '@/entities/genshin/wiki/galleries.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGalleryDto, createGallerySchema, DeleteGalleryDto, deleteGallerySchema, GetGalleryDto, GetGalleryParamsDto, getGalleryParamsSchema, getGallerySchema, UpdateGalleryDto, updateGallerySchema } from './galleries.dto';

@Injectable()
export class GalleriesService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleryRepository: Repository<Gallery>,
  ) { }

  async get(params: GetGalleryDto): Promise<Gallery[]> {
    const parsed = getGallerySchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { page, limit, character, ...ref } = params;

    return await this.galleryRepository.find({
      where: {
        ...ref,
        character: {
          id: character
        }
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
    });
  }

  async getOne(params: GetGalleryParamsDto): Promise<Gallery> {
    const parsed = getGalleryParamsSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    return await this.galleryRepository.findOne({
      where: {
        id: params.id,
      },
    });
  }

  async create(dto: CreateGalleryDto): Promise<Gallery> {
    const parsed = createGallerySchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const galleryExists = await this.galleryRepository.findOne({
      where: {
        url: dto.url,
      },
    });

    if (galleryExists) {
      throw new BadRequestException('この画像は既に存在しています');
    }

    return await this.galleryRepository.save({
      ...dto,
      character: {
        id: dto.character
      }
    });
  }

  async update(dto: UpdateGalleryDto): Promise<void> {
    const parsed = updateGallerySchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const gallery = await this.galleryRepository.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!gallery) {
      throw new BadRequestException('画像が見つかりません');
    }

    await this.galleryRepository.update({ id: dto.id }, {
      ...dto,
      character: {
        id: dto.character
      }
    });
  }

  async delete(dto: DeleteGalleryDto): Promise<void> {
    const parsed = deleteGallerySchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const gallery = await this.galleryRepository.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!gallery) {
      throw new BadRequestException('画像が見つかりません');
    }

    await this.galleryRepository.delete({ id: dto.id });
  }
}
