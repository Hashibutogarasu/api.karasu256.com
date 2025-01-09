import { GenshinArtifactEntity } from '@/entities/genshin/artifacts/artifact.entity';
import { HttpException, Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtifactDto, DeleteArtifactDto, FindArtifactBySlugDto, UpdateArtifactDto } from './artifacts.dto';
import { AdminGuard } from '@/user/admin/admin.guard';

@Injectable()
export class ArtifactsService {
  constructor(
    @InjectRepository(GenshinArtifactEntity)
    private readonly artifactRepository: Repository<GenshinArtifactEntity>
  ) { }

  async findAll(): Promise<GenshinArtifactEntity[]> {
    return await this.artifactRepository.find();
  }

  async findBySlug(dto: FindArtifactBySlugDto): Promise<GenshinArtifactEntity> {
    return await this.artifactRepository.findOne({
      where: {
        slug: dto.slug
      }
    });
  }

  @UseGuards(AdminGuard)
  async create(dto: CreateArtifactDto): Promise<GenshinArtifactEntity> {
    const data = await this.artifactRepository.findOne({
      where: {
        slug: dto.slug
      }
    });

    if (data) {
      throw new HttpException('Artifact already exists', 400);
    }

    const { part, mainStat, ...createData } = dto;

    return await this.artifactRepository.save({
      ...createData,
      part: part,
      mainStat: mainStat as any,
    });
  }

  @UseGuards(AdminGuard)
  async update(dto: UpdateArtifactDto): Promise<GenshinArtifactEntity> {
    const data = await this.artifactRepository.findOne({
      where: {
        id: dto.id
      }
    });

    if (!data) {
      throw new HttpException('Artifact not found', 404);
    }

    const { id, part, mainStat, ...updateData } = dto;

    for (const key in updateData) {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    }

    return await this.artifactRepository.save({
      id: dto.id,
      ...updateData,
      part: part,
      mainStat: {

      }
    });
  }

  @UseGuards(AdminGuard)
  async delete(dto: DeleteArtifactDto): Promise<void> {
    await this.artifactRepository.delete({
      id: dto.id
    });
  }
}
