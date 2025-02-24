import { Gallery } from '@/entities/common/galleries.entity';
import { S3Service } from '@/s3/s3.service';
import { CreateDto, DeleteDto, deleteSchema, UpdateDto } from '@/utils/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSchema, updateSchema } from './galleries.dto';

@Injectable()
export class GalleriesService {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleryRepository: Repository<Gallery>,

    private readonly s3Service: S3Service,
  ) { }

  async uploadFile(file: Express.Multer.File): Promise<Gallery> {
    if (!file) {
      throw new BadRequestException('ファイルがアップロードされていません');
    }

    const { url, key } = await this.s3Service.uploadFile(file);

    const gallery = await this.galleryRepository.save({
      url,
      alt: file.originalname,
      key,
    });

    return gallery;
  }

  async create(dto: CreateDto<Gallery>): Promise<Gallery> {
    const parsed = createSchema.safeParse(dto);

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

    const { character, ...ref } = dto;

    return await this.galleryRepository.save({
      ...ref,
    });
  }

  async update(dto: UpdateDto<Gallery>): Promise<void> {
    const parsed = updateSchema.safeParse(dto);

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

    const { character, ...ref } = dto;

    await this.galleryRepository.update({ id: dto.id }, {
      ...ref,
    });
  }

  async delete(dto: DeleteDto): Promise<void> {
    const parsed = deleteSchema.safeParse(dto);

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

    await this.s3Service.deleteFile(gallery.key);

    await this.galleryRepository.delete({ id: dto.id });
  }
}
