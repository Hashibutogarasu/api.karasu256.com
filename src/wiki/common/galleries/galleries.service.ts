import { Gallery } from '@/entities/common/galleries.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { S3Service } from '@/s3/s3.service';
import { CreateDto, DeleteDto, deleteSchema, GetOneDto, GetParamsDto, UpdateDto } from '@/utils/dto';
import { createSchema, getSchema, updateSchema } from './galleries.dto';

@Injectable()
export class GalleriesService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleryRepository: Repository<Gallery>,

    private readonly configService: ConfigService,

    private readonly s3Service: S3Service,
  ) { }

  async get(params: GetParamsDto<Gallery>): Promise<Gallery[]> {
    const parsed = getSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { page, limit, character, ...ref } = params;

    return await this.galleryRepository.find({
      where: {
        ...ref,
        character
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
    });
  }

  async getOne(params: GetOneDto<Gallery>): Promise<Gallery> {
    const parsed = getSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    return await this.galleryRepository.findOne({
      where: {
        ...params,
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

    return await this.galleryRepository.save({
      ...dto,
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

    await this.galleryRepository.update({ id: dto.id }, {
      ...dto,
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
