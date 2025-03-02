import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSchema, updateSchema } from './versions.dto';
import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { Country } from '@/entities/wiki/genshin/countries.entity';

@Injectable()
export class VersionsService implements IBaseAdminCaS<VersionsEntity> {
  constructor(
    @InjectRepository(VersionsEntity)
    private readonly versionsRepository: Repository<VersionsEntity>,

    @InjectRepository(ArtifactSets)
    private readonly artifactSetsRepository: Repository<ArtifactSets>,
    
    @InjectRepository(Country)
    private readonly regionsRepository: Repository<Country>
  ) { }

  async create(dto: CreateDto<any>): Promise<VersionsEntity> {
    const { artifact_sets, regions, ...ref } = createSchema.safeParse(dto).data;

    const newArtifactSets = await Promise.all(Array.from(artifact_sets).map(async (artifactSet) => {
      const artifactSetRef = await this.artifactSetsRepository.findOne({
        where: {
          id: artifactSet.id
        }
      }) ?? await this.artifactSetsRepository.save({
        ...artifactSet
      });

      return artifactSetRef;
    }));

    const newRegions = await Promise.all(Array.from(regions).map(async (region) => {
      const regionRef = await this.regionsRepository.findOne({
        where: {
          id: region.id
        }
      }) ?? await this.regionsRepository.save({
        ...region
      });

      return regionRef;
    }));

    return await this.versionsRepository.save({
      regions: newRegions,
      artifact_sets: newArtifactSets,
      ...ref
    });
  }

  async update(dto: UpdateDto<VersionsEntity>): Promise<void> {
    const { artifact_sets, regions, ...ref } = updateSchema.safeParse(dto).data;

    const newArtifactSets = await Promise.all(Array.from(artifact_sets).map(async (artifactSet) => {
      const artifactSetRef = await this.artifactSetsRepository.findOne({
        where: {
          id: artifactSet.id
        }
      }) ?? await this.artifactSetsRepository.save({
        ...artifactSet
      });

      return artifactSetRef;
    }));

    const newRegions = await Promise.all(Array.from(regions).map(async (region) => {
      const regionRef = await this.regionsRepository.findOne({
        where: {
          id: region.id
        }
      }) ?? await this.regionsRepository.save({
        ...region
      });

      return regionRef;
    }));

    await this.versionsRepository.update(ref.id, {
      countries: newRegions,
      artifact_sets: newArtifactSets,
      ...ref
    });
  }

  async delete(dto: DeleteDto): Promise<void> {
    await this.versionsRepository.delete(dto.id);
  }
}
