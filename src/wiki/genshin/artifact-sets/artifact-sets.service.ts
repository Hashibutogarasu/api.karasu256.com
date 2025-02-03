import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtifactSets } from '@/entities/genshin/wiki/artifact-sets.entity';
import { Repository } from 'typeorm';
import { VersionsEntity } from '@/entities/genshin/wiki/versions.entity';
import { CreateDto, DeleteDto, deleteSchema, GetOneDto, GetParamsDto, UpdateDto } from '@/utils/dto';
import { createSchema, getSchema, updateSchema } from './artifact-sets.dto';

@Injectable()
export class ArtifactSetsService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(ArtifactSets)
    private readonly repository: Repository<ArtifactSets>,

    @InjectRepository(VersionsEntity)
    private readonly versionRepository: Repository<VersionsEntity>,
  ) { }

  async get(params: GetParamsDto<ArtifactSets>): Promise<ArtifactSets[]> {
    const parsed = getSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { page, limit, artifacts, characters, ...ref } = params;

    return await this.repository.find({
      where: {
        ...ref,
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
    });
  }

  async getOne(params: GetOneDto<ArtifactSets>): Promise<ArtifactSets> {
    const parsed = getSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { artifacts, characters, ...ref } = params;

    return await this.repository.findOne({
      where: {
        ...ref,
      },
    });
  }

  async create(dto: CreateDto<ArtifactSets>): Promise<ArtifactSets> {
    const parsed = createSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const artifactSetExists = await this.repository.findOne({
      where: {
        name: dto.name,
      },
    });

    if (artifactSetExists) {
      throw new BadRequestException('この聖遺物セットは既に存在しています');
    }

    const { artifacts, characters, version, ...ref } = dto;

    const versionExists = await this.versionRepository.findOne({
      where: {
        version_string: version.version_string
      },
    });

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    return await this.repository.save({
      ...ref,
      version: versionExists,
    });
  }

  async update(dto: UpdateDto<ArtifactSets>): Promise<void> {
    const parsed = updateSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { version, artifacts, characters, ...ref } = dto;

    const versionExists = await this.versionRepository.findOne({
      where: {
        version_string: version.version_string,
      },
    });

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    await this.repository.update(dto.id, {
      ...ref,
      version: versionExists,
    });
  }

  async delete(dto: DeleteDto): Promise<void> {
    const parsed = deleteSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const artifactSet = await this.repository.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!artifactSet) {
      throw new BadRequestException('この聖遺物セットは存在しません');
    }

    await this.repository.delete(dto.id);
  }
}
