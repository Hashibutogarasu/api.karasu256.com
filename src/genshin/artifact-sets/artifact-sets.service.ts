import { GenshinArtifactSetEntity } from '@/entities/genshin/artifacts/artifact_set.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtifactSetsDto, DeleteArtifactSetsDto, FindArtifactSetsBySlugDto, FindArtifactSetsDto, UpdateArtifactSetsDto } from './artifact-sets.dto';

@Injectable()
export class ArtifactSetsService {
  constructor(
    @InjectRepository(GenshinArtifactSetEntity)
    private readonly artifactSetsRepository: Repository<GenshinArtifactSetEntity>
  ) { }

  async findAll() {
    return await this.artifactSetsRepository.find();
  }

  async findBySlug(dto: FindArtifactSetsBySlugDto) {
    return await this.artifactSetsRepository.findOne({
      where: {
        slug: dto.slug
      }
    });
  }

  async find(dto: FindArtifactSetsDto) {
    return await this.artifactSetsRepository.findOne({
      where: {
        id: dto.id,
        name: dto.name,
        slug: dto.slug,
        description: dto.description,
      }
    });
  }

  async create(dto: CreateArtifactSetsDto) {
    const data = await this.artifactSetsRepository.findOne({
      where: {
        slug: dto.slug
      }
    });

    if (data) {
      throw new HttpException('Artifact Sets already exists', 400);
    }

    return await this.artifactSetsRepository.save(dto);
  }

  async update(dto: UpdateArtifactSetsDto) {
    const data = await this.artifactSetsRepository.findOne({
      where: {
        slug: dto.slug
      }
    });

    if (!data) {
      throw new HttpException('Artifact Sets not found', 404);
    }

    const { id, ...updateData } = dto;

    for (const key in updateData) {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    }

    return await this.artifactSetsRepository.save({
      id,
      ...updateData
    });
  }

  async delete(dto: DeleteArtifactSetsDto) {
    const data = await this.artifactSetsRepository.findOne({
      where: {
        id: dto.id
      }
    });

    if (!data) {
      throw new HttpException('Artifact Sets not found', 404);
    }

    return await this.artifactSetsRepository.delete(dto);
  }
}
