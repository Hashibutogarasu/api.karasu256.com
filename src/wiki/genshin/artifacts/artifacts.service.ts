import { Artifact } from '@/entities/genshin/wiki/artifact/artifact.entity';
import { UpdateDto, DeleteDto } from '@/interfaces/basecontroller.dto';
import { BaseService } from '@/interfaces/baseservice';
import { artifactSchema } from '@/types/genshin/artifact/artifact';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { z } from 'zod';
import { RelationMap } from 'typeorm-relations';

@Injectable()
export class ArtifactsService implements BaseService<Artifact> {
  constructor(
    @InjectRepository(Artifact)
    private readonly artifactRepository: Repository<Artifact>,
  ) { }

  async getAll(): Promise<Artifact[]> {
    const relation = new RelationMap<Artifact>({
      artifactSet: true
    });

    return await this.artifactRepository.find({
      relations: relation.toFindOptionsRelations()
    });
  }

  async get(dto: z.infer<typeof artifactSchema>): Promise<Artifact> {
    const relation = new RelationMap<Artifact>({
      artifactSet: true
    });

    return await this.artifactRepository.findOne({
      where: {
        ...dto
      },
      relations: relation.toFindOptionsRelations()
    });
  }
  async create(dto: any): Promise<void> {
    await this.artifactRepository.insert(dto);
  }
  async update(dto: UpdateDto<Artifact>): Promise<void> {
    await this.artifactRepository.update(dto.id, dto.entity);
  }
  async delete(params: DeleteDto): Promise<void> {
    await this.artifactRepository.delete(params);
  }
}
