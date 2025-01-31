import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateArtifactSetDto, createArtifactSetSchema, DeleteArtifactSetDto, deleteArtifactSetSchema, GetArtifactSetDto, GetArtifactSetParamsDto, getArtifactSetParamsSchema, UpdateArtifactSetDto, updateArtifactSetSchema } from './artifact-sets.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtifactSets } from '@/entities/genshin/wiki/artifact-sets.entity';
import { Repository } from 'typeorm';
import { getCountriesSchema } from '../countries/contries.dto';

@Injectable()
export class ArtifactSetsService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(ArtifactSets)
    private readonly repository: Repository<ArtifactSets>,
  ) { }

  async get(params: GetArtifactSetDto): Promise<ArtifactSets[]> {
    const parsed = getCountriesSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { page, limit, ...ref } = params;

    return await this.repository.find({
      where: {
        ...ref,
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
    });
  }

  async getOne(params: GetArtifactSetParamsDto): Promise<ArtifactSets> {
    const parsed = getArtifactSetParamsSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    return await this.repository.findOne({
      where: {
        id: params.id,
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

    return await this.repository.save(dto);
  }

  async update(dto: UpdateArtifactSetDto): Promise<void> {
    const parsed = updateArtifactSetSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    await this.repository.update(dto.id, dto);
  }

  async delete(dto: DeleteArtifactSetDto): Promise<void> {
    const parsed = deleteArtifactSetSchema.safeParse(dto);

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
