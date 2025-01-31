import { Gallery } from '@/entities/common/galleries.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGalleryDto, createGallerySchema, DeleteGalleryDto, deleteGallerySchema, GetGalleryDto, GetGalleryParamsDto, getGalleryParamsSchema, getGallerySchema, UpdateGalleryDto, updateGallerySchema } from './galleries.dto';
import { DeleteObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3Service } from '@/api/s3/s3.service';

@Injectable()
export class GalleriesService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleryRepository: Repository<Gallery>,

    private readonly configService: ConfigService,

    private readonly s3Service: S3Service,
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

    await this.s3Service.deleteFile(gallery.key);

    await this.galleryRepository.delete({ id: dto.id });
  }
}
