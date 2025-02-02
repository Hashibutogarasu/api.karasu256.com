import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateArtifactSetDto, createArtifactSetSchema, GetArtifactSetDto, UpdateArtifactSetDto, updateArtifactSetSchema } from './artifact-sets.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtifactSets } from '@/entities/genshin/wiki/artifact-sets.entity';
import { Repository } from 'typeorm';
import { getCountriesSchema } from '../countries/contries.dto';
import { DeleteDto, deleteSchema, GetParamsDto, getParamsSchema } from '@karasu-lab/karasu-lab-sdk';
import { VersionsEntity } from '@/entities/genshin/wiki/versions.entity';

@Injectable()
export class ArtifactSetsService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(ArtifactSets)
    private readonly repository: Repository<ArtifactSets>,

    @InjectRepository(VersionsEntity)
    private readonly versionRepository: Repository<VersionsEntity>,
  ) { }

  async get(params: GetArtifactSetDto): Promise<ArtifactSets[]> {
    const parsed = getCountriesSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { page, limit, version, ...ref } = params;

    return await this.repository.find({
      where: {
        ...ref,
        version: {
          version_string: version,
        },
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
    });
  }

  async getOne(params: GetParamsDto): Promise<ArtifactSets> {
    const parsed = getParamsSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    return await this.repository.findOne({
      where: {
        id: params,
      },
    });
  }

  async create(dto: CreateArtifactSetDto): Promise<ArtifactSets> {
    const parsed = createArtifactSetSchema.safeParse(dto);

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

    const { version, ...ref } = dto;

    const versionExists = await this.versionRepository.findOne({
      where: {
        version_string: version,
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

  async update(dto: UpdateArtifactSetDto): Promise<void> {
    const parsed = updateArtifactSetSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { version, ...ref } = dto;

    const versionExists = await this.versionRepository.findOne({
      where: {
        version_string: version,
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
