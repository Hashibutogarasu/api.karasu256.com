import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, DeleteDto, deleteSchema, UpdateDto } from '@/utils/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSchema, updateSchema } from './versions.dto';

@Injectable()
export class VersionsService implements IBaseAdminCaS<VersionsEntity> {
  constructor(
    @InjectRepository(VersionsEntity)
    private readonly versionsRepository: Repository<VersionsEntity>
  ) { }

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
