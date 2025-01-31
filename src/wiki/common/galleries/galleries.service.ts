import { Gallery } from '@/entities/common/galleries.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGalleryDto, createGallerySchema, DeleteGalleryDto, deleteGallerySchema, GetGalleryDto, GetGalleryParamsDto, getGalleryParamsSchema, getGallerySchema, UpdateGalleryDto, updateGallerySchema } from './galleries.dto';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GalleriesService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleryRepository: Repository<Gallery>,

    private readonly configService: ConfigService,
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

  async uploadFile(file: Express.Multer.File): Promise<{ url: string }> {
    if (!file) {
      throw new BadRequestException('ファイルがアップロードされていません');
    }

    const s3Client = new S3Client({
      region: 'ap-northeast-1',
      credentials: {
        accountId: this.configService.get('CLOUDFLARE_ACCOUNT_ID'),
        accessKeyId: this.configService.get('CLOUDFLARE_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('CLOUDFLARE_SECRET_ACCESS_KEY'),
      },
    });

    await s3Client.send(new PutObjectCommand({
      Bucket: this.configService.get('CLOUDFLARE_BUCKET'),
      Key: file.originalname,
      Body: file.buffer,
    }));

    const uploadedFileUrl = `https://${this.configService.get('CLOUDFLARE_BUCKET')}.s3.${this.configService.get('CLOUDFLARE_REGION')}.amazonaws.com/${file.originalname}`;

    return {
      url: uploadedFileUrl,
    };
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
