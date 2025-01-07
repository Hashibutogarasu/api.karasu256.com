import { GenshinArtifactSetEntity } from '@/entities/genshin/artifacts/artifact_set.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtifactSetsDto, DeleteArtifactSetsDto, FindArtifactSetsBySlugDto, UpdateArtifactSetsDto } from './artifact-sets.dto';

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

  async create(dto: CreateArtifactSetsDto) {
    const data = this.artifactSetsRepository.findOne({
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
    const data = this.artifactSetsRepository.findOne({
      where: {
        slug: dto.slug
      }
    });

    if (!data) {
      throw new HttpException('Artifact Sets not found', 404);
    }

    return await this.artifactSetsRepository.save(dto);
  }

  async delete(dto: DeleteArtifactSetsDto) {
    const data = this.artifactSetsRepository.findOne({
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
