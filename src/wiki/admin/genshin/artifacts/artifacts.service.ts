import { Artifacts } from '@/entities/genshin/wiki/artifacts.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtifactDto, createArtifactSchema, DeleteArtifactDto, deleteArtifactSchema, GetArtifactDto, GetArtifactParamsDto, getArtifactParamsSchema, getArtifactSchema, UpdateArtifactDto, updateArtifactSchema } from './artifacts.dto';

@Injectable()
export class ArtifactsService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Artifacts)
    private readonly artifactsRepository: Repository<Artifacts>
  ) { }

  async get(dto: GetArtifactDto): Promise<Artifacts[]> {
    const parsed = getArtifactSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { page, limit, ...ref } = dto;

    return await this.artifactsRepository.find({
      where: {
        ...ref,
      },
      skip: (page - 1) * limit,
    });
  }

  async getOne(params: GetArtifactParamsDto): Promise<Artifacts> {
    const parsed = getArtifactParamsSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    return await this.artifactsRepository.findOne({
      where: {
        id: params.id,
      },
    });
  }

  async create(dto: CreateArtifactDto): Promise<Artifacts> {
    const parsed = createArtifactSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const artifactExists = await this.artifactsRepository.findOne({
      where: {
        name: dto.name,
      },
    });

    if (artifactExists) {
      throw new BadRequestException('この聖遺物は既に存在しています');
    }

    return await this.artifactsRepository.save(dto);
  }

  async update(dto: UpdateArtifactDto): Promise<void> {
    const parsed = updateArtifactSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const artifact = await this.artifactsRepository.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!artifact) {
      throw new BadRequestException('聖遺物が見つかりません');
    }

    await this.artifactsRepository.update({ id: dto.id }, dto);
  }

  async delete(dto: DeleteArtifactDto): Promise<void> {
    const parsed = deleteArtifactSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const artifact = await this.artifactsRepository.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!artifact) {
      throw new BadRequestException('聖遺物が見つかりません');
    }

    await this.artifactsRepository.delete({ id: dto.id });
  }
}
