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

  async get(query: GetParamsDto<VersionsEntity, ["createdAt", "updatedAt"]>): Promise<VersionsEntity[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { artifact_sets, artifacts, characters, countries, weapons, version_string, released, take, skip, ...ref } = query;

    return await this.versionsRepository.find({
      where: {
        ...ref,
      },
      take: take,
      skip: skip,
    });
  }

  async getOne(query: GetParamsDto<VersionsEntity, ["weapons", "artifacts", "characters", "countries", "artifact_sets", "createdAt", "updatedAt"]>): Promise<VersionsEntity> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { take, skip, ...ref } = query;

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
