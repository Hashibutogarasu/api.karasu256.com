import { VersionsEntity } from '@/entities/genshin/wiki/versions.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { CreateDto, DeleteDto, deleteSchema, GetParamsDto, UpdateDto } from '@/utils/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createSchema, getSchema, updateSchema } from './versions.dto';
import { Repository } from 'typeorm';

@Injectable()
export class VersionsService implements IBaseControllerAndService {
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
        version_string,
        released,
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
    });
  }

  async create(dto: CreateDto<VersionsEntity>): Promise<VersionsEntity> {
    const parsed = createSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { artifact_sets, artifacts, characters, countries, weapons, version_string, released, ...ref } = dto;

    return await this.versionsRepository.save({
      ...ref,
      version_string,
      released,
    });
  }

  async update(dto: UpdateDto<VersionsEntity>): Promise<void> {
    const parsed = updateSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    const { id, artifact_sets, artifacts, characters, countries, weapons, version_string, released, ...ref } = dto;

    await this.versionsRepository.update(id, {
      ...ref,
      version_string,
      released,
    });
  }

  async delete(dto: DeleteDto): Promise<void> {
    const parsed = deleteSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors[0].message);
    }

    await this.versionsRepository.delete(dto.id);
  }
}
