import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSchema } from './artifact-sets.dto';

@Injectable()
export class ArtifactSetsService implements IBaseAdminCaS<ArtifactSets> {
  constructor(
    @InjectRepository(ArtifactSets)
    private readonly artifactSetsRepository: Repository<ArtifactSets>
  ) { }

  async create(dto: CreateDto<ArtifactSets>): Promise<ArtifactSets> {
    const { ...ref } = createSchema.safeParse(dto).data;

    return await this.artifactSetsRepository.save(ref);
  }

  async update(dto: UpdateDto<ArtifactSets>): Promise<void> {
    const { ...ref } = createSchema.safeParse(dto).data;

    await this.artifactSetsRepository.update(dto.id, ref);
  }

  async delete(dto: DeleteDto): Promise<void> {
    await this.artifactSetsRepository.delete(dto.id);
  }
}
