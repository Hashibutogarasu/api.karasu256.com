import { Weapon } from '@/entities/wiki/genshin/weapons.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSchema, updateSchema } from './weapons.dto';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';

@Injectable()
export class WeaponsService implements IBaseAdminCaS<Weapon> {
  constructor(
    @InjectRepository(Weapon)
    private readonly weaponsRepository: Repository<Weapon>,

    @InjectRepository(VersionsEntity)
    private readonly versionsRepository: Repository<VersionsEntity>
  ) { }

  async create(dto: CreateDto<any>): Promise<Weapon> {
    const { version, ...ref } = createSchema.safeParse(dto).data;

    const newVersion = await this.versionsRepository.findOne({
      where: {
        id: version.id
      }
    }) || await this.versionsRepository.save(version);

    return this.weaponsRepository.save({
      ...ref,
      version: newVersion
    });
  }

  async update(dto: UpdateDto<Weapon>): Promise<void> {
    const { id, version, ...ref } = updateSchema.safeParse(dto).data;

    await this.versionsRepository.update(version.id, version);

    const newVersion = await this.versionsRepository.findOne({
      where: {
        id: version.id
      }
    });

    await this.weaponsRepository.update(id, {
      ...ref,
      version: newVersion
    });
  }

  async delete(dto: DeleteDto): Promise<void> {
    await this.weaponsRepository.delete(dto.id);
  }
}
