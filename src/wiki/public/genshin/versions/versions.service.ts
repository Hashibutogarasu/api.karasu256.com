import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { IBasePublicCaS } from '@/types/ibase_public_cas';
import { GetParamsDto } from '@/utils/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getSchema } from './versions.dto';
import { Repository } from 'typeorm';

@Injectable()
export class VersionsService implements IBasePublicCaS<VersionsEntity> {
  constructor(
    @InjectRepository(VersionsEntity)
    private readonly versionsRepository: Repository<VersionsEntity>
  ) { }

  async getAll({ take, skip }: { take: number; skip: number }): Promise<VersionsEntity[]> {
    return await this.versionsRepository.find({
      take,
      skip,
    });
  }

  async get(query: GetParamsDto<VersionsEntity, ["createdAt", "updatedAt"]>): Promise<VersionsEntity[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { regions, artifact_sets, ...ref } = parsed.data;

    return await this.versionsRepository.find({
      where: {
        ...ref,
      },
    });
  }

  async getOne(query: GetParamsDto<VersionsEntity, ["weapons", "artifacts", "characters", "countries", "artifact_sets", "createdAt", "updatedAt"]>): Promise<VersionsEntity> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { regions, artifact_sets, ...ref } = parsed.data;

    return await this.versionsRepository.findOne({
      where: {
        ...ref,
      },
      relations: {
        weapons: true,
        artifacts: true,
        characters: true,
        countries: true,
        artifact_sets: true,
      }
    });
  }
}
