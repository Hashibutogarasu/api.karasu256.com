import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';
import { Controller } from '@nestjs/common';
import { ArtifactSetsService } from './artifact-sets.service';

@Controller('artifact-sets')
export class ArtifactSetsController implements IBaseAdminCaS<ArtifactSets> {
  constructor(
    private readonly artifactSetsService: ArtifactSetsService
  ) { }

  async create(dto: CreateDto<ArtifactSets>): Promise<ArtifactSets> {
    return this.artifactSetsService.create(dto);
  }

  async update(dto: UpdateDto<ArtifactSets>): Promise<void> {
    return this.artifactSetsService.update(dto);
  }

  async delete(dto: DeleteDto): Promise<void> {
    return this.artifactSetsService.delete(dto);
  }

}
