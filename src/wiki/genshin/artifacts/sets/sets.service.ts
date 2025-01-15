import { ArtifactSet } from '@/entities/genshin/wiki/artifact/artifact_set.entity';
import { UpdateDto, DeleteDto } from '@/interfaces/basecontroller.dto';
import { artifactSetSchema } from '@/types/genshin/artifact/artifact_set';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { z } from 'zod';
import { RelationMap } from 'typeorm-relations';
import { AbstractBaseService } from '@/interfaces/abstractbaseservice';
@Injectable()
export class SetsService extends AbstractBaseService<ArtifactSet> {
  constructor(
    @InjectRepository(ArtifactSet)
    private readonly artifactSetRepository: Repository<ArtifactSet>,
  ) {
    super();
  }

  async getAll(): Promise<ArtifactSet[]> {
    const relations = new RelationMap<ArtifactSet>({
      artifacts: true
    });

    return await this.artifactSetRepository.find({
      relations: relations.toFindOptionsRelations()
    });
  }

  async get(dto: z.infer<typeof artifactSetSchema>): Promise<ArtifactSet> {
    const relations = new RelationMap<ArtifactSet>({
      artifacts: true
    });

    return await this.artifactSetRepository.findOne({
      where: {
        ...dto
      },
      relations: relations.toFindOptionsRelations()
    });
  }

  async create(dto: z.infer<typeof artifactSetSchema>): Promise<void> {
    await this.artifactSetRepository.insert(dto);
  }

  async update(dto: UpdateDto<ArtifactSet>): Promise<void> {
    await this.artifactSetRepository.update(dto.id, dto.entity);
  }

  async delete(params: DeleteDto): Promise<void> {
    await this.artifactSetRepository.delete(params);
  }
}
