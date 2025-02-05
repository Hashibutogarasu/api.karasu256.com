import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, UpdateDto, DeleteDto, deleteSchema } from '@/utils/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { createSchema, updateSchema } from './artifact-sets.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';

@Injectable()
export class ArtifactSetsService implements IBaseAdminCaS<ArtifactSets> {
  constructor(
    @InjectRepository(ArtifactSets)
    private readonly repository: Repository<ArtifactSets>,

    @InjectRepository(VersionsEntity)
    private readonly versionRepository: Repository<VersionsEntity>,
  ) { }

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
