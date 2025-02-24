import { IBasePublicCaS } from '@/types/ibase_public_cas';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { Repository } from 'typeorm';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { CreateDto, DeleteDto, deleteSchema, GetOneDto, GetParamsDto, UpdateDto } from '@/utils/dto';
import { getSchema } from './artifact-sets.dto';

@Injectable()
export class ArtifactSetsService implements IBasePublicCaS<ArtifactSets> {
  constructor(
    @InjectRepository(ArtifactSets)
    private readonly artifactSetsrepository: Repository<ArtifactSets>,

    @InjectRepository(VersionsEntity)
    private readonly versionRepository: Repository<VersionsEntity>,
  ) { }

  async getAll({ take, skip }: { take: number; skip: number }): Promise<ArtifactSets[]> {
    return await this.artifactSetsrepository.find({
      take,
      skip,
    });
  }

  async get(query: GetParamsDto<ArtifactSets, ["characters", "artifacts", "createdAt", "updatedAt"]>): Promise<ArtifactSets[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { ...ref } = parsed.data;

    return await this.artifactSetsrepository.find({
      where: {
        ...ref,
      },
    });
  }

  async getOne(query: GetOneDto<ArtifactSets>): Promise<ArtifactSets> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { ...ref } = parsed.data;

    return await this.artifactSetsrepository.findOne({
      where: {
        ...ref,
      },
    });
  }
}
