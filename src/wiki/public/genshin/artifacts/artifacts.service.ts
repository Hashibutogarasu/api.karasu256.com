import { Artifacts } from '@/entities/wiki/genshin/artifacts.entity';
import { IBasePublicCaS } from '@/types/ibase_public_cas';
import { CreateDto, GetParamsDto, GetOneDto, UpdateDto, DeleteDto, deleteSchema } from '@/utils/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getSchema } from './artifacts.dto';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';

@Injectable()
export class ArtifactsService implements IBasePublicCaS<Artifacts> {
  constructor(
    @InjectRepository(Artifacts)
    private readonly artifactsRepository: Repository<Artifacts>,

    @InjectRepository(VersionsEntity)
    private readonly versionRepository: Repository<VersionsEntity>,
  ) { }

  async getAll(): Promise<Artifacts[]> {
    return await this.artifactsRepository.find();
  }

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
      take: take ?? 10,
      skip: skip ?? 0,
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
}
