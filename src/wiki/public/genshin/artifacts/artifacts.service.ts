import { Artifacts } from '@/entities/wiki/genshin/artifacts.entity';
import { IBasePublicCaS } from '@/types/ibase_public_cas';
import { CreateDto, GetParamsDto, GetOneDto, UpdateDto, DeleteDto, deleteSchema } from '@/utils/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSchema, getSchema, updateSchema } from './artifacts.dto';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';

@Injectable()
export class ArtifactsService implements IBasePublicCaS<Artifacts> {
  constructor(
    @InjectRepository(Artifacts)
    private readonly artifactsRepository: Repository<Artifacts>,

    @InjectRepository(VersionsEntity)
    private readonly versionRepository: Repository<VersionsEntity>,
  ) { }

  async get(query: GetParamsDto<Artifacts, ["createdAt", "updatedAt"]>): Promise<Artifacts[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { version, artifact_sets, take, skip, ...ref } = query;

    return await this.artifactsRepository.find({
      where: {
        ...ref,
        ...artifact_sets,
        version: {
          id: version.id
        }
      },
      relations: {
        version: true
      },
      take: take,
      skip: skip,
    });
  }

  async getOne(query_: GetOneDto<Artifacts>): Promise<Artifacts> {
    const parsed = getSchema.safeParse(query_);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { take, skip, version, ...ref } = parsed.data;

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
