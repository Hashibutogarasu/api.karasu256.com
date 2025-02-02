import { Artifacts } from '@/entities/genshin/wiki/artifacts.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtifactDto, createArtifactSchema, GetArtifactDto, getArtifactSchema, UpdateArtifactDto, updateArtifactSchema } from './artifacts.dto';
import { DeleteDto, deleteSchema, GetParamsDto, getParamsSchema } from '@karasu-lab/karasu-lab-sdk';

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

    const { page, limit, version, ...ref } = dto;

    return await this.artifactsRepository.find({
      where: {
        ...ref,
        version: {
          version_string: version,
        }
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
    });
  }

  async getOne(params: GetParamsDto): Promise<Artifacts> {
    const parsed = getParamsSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    return await this.artifactsRepository.findOne({
      where: {
        id: params,
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

    const { version, ...ref } = dto;

    const versionExists = await this.artifactsRepository.findOne({
      where: {
        version: {
          version_string: version,
        },
      },
    });

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    return await this.artifactsRepository.save({
      ...ref,
      version: versionExists,
    });
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

    const { version, ...ref } = dto;

    const versionExists = await this.artifactsRepository.findOne({
      where: {
        version: {
          version_string: version,
        },
      },
    });

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    await this.artifactsRepository.update({ id: dto.id }, {
      ...ref,
      version: versionExists,
    });
  }

  async delete(dto: DeleteDto): Promise<void> {
    const parsed = deleteSchema.safeParse(dto);

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
