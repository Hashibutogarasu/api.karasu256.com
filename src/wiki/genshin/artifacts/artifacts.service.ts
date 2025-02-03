import { Artifacts } from '@/entities/genshin/wiki/artifacts.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { CreateDto, GetParamsDto, GetOneDto, UpdateDto, DeleteDto, deleteSchema } from '@/utils/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSchema, getSchema, updateSchema } from './artifacts.dto';
import { VersionsEntity } from '@/entities/genshin/wiki/versions.entity';

@Injectable()
export class ArtifactsService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Artifacts)
    private readonly artifactsRepository: Repository<Artifacts>,

    @InjectRepository(VersionsEntity)
    private readonly versionRepository: Repository<VersionsEntity>,
  ) { }

  async get(query_: GetParamsDto<Artifacts, ["createdAt", "updatedAt"]>): Promise<Artifacts[]> {
    const parsed = getSchema.safeParse(query_);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { query: { page, limit, version, ...ref } } = parsed.data;

    const versionExists = await this.versionRepository.findOne({
      where: {
        version_string: version
      }
    })

    return await this.artifactsRepository.find({
      where: {
        ...ref,
        ...ref,
        version: versionExists
      },
      relations: {
        version: true
      },
      take: limit,
      skip: page > 0 && (page - 1) * limit,
    });
  }

  async getOne(query_: GetOneDto<Artifacts>): Promise<Artifacts> {
    const parsed = getSchema.safeParse(query_);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { page, limit, version, query, ...ref } = parsed.data;

    const versionExists = await this.versionRepository.findOne({
      where: {
        version_string: version,
      },
    });

    return await this.artifactsRepository.findOne({
      where: {
        ...ref,
        version: version && versionExists
      },
    });
  }

  async create(dto: CreateDto<Artifacts>): Promise<Artifacts> {
    const parsed = createSchema.safeParse(dto);

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

    const { version, artifact_sets, ...ref } = dto;

    const versionExists = await this.artifactsRepository.findOne({
      where: {
        version: {
          version_string: version.version_string,
        }
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

  async update(dto: UpdateDto<Artifacts>): Promise<void> {
    const parsed = updateSchema.safeParse(dto);

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

    const { version, artifact_sets, ...ref } = dto;

    const versionExists = await this.artifactsRepository.findOne({
      where: {
        ...ref,
        version: {
          version_string: version.version_string,
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
