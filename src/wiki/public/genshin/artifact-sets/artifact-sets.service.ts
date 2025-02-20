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
    private readonly repository: Repository<ArtifactSets>,

    @InjectRepository(VersionsEntity)
    private readonly versionRepository: Repository<VersionsEntity>,
  ) { }

  async getAll(): Promise<ArtifactSets[]> {
    return await this.repository.find();
  }

  async get(query: GetParamsDto<ArtifactSets, ["characters", "artifacts", "createdAt", "updatedAt"]>): Promise<ArtifactSets[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { version, take, skip, ...ref } = query;

    return await this.repository.find({
      where: {
        ...ref,
        version: {
          id: version.id
        }
      },
      take: take ?? 10,
      skip: skip ?? 0,
    });
  }

  async getOne(query: GetOneDto<ArtifactSets>): Promise<ArtifactSets> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { artifacts, characters, ...ref } = query;

    return await this.repository.findOne({
      where: {
        ...ref,
      },
    });
  }
}
