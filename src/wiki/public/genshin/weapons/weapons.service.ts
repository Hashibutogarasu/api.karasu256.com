import { Weapon } from '@/entities/wiki/genshin/weapons.entity';
import { IBasePublicCaS } from '@/types/ibase_public_cas';
import { GetOneDto, GetParamsDto } from '@/utils/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getSchema } from './weapons.dto';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';

@Injectable()
export class WeaponsService implements IBasePublicCaS<Weapon> {
  constructor(
    @InjectRepository(Weapon)
    private readonly weaponsRepository: Repository<Weapon>,

    @InjectRepository(VersionsEntity)
    private readonly versionsRepository: Repository<VersionsEntity>
  ) { }

  async getAll(): Promise<Weapon[]> {
    return await this.weaponsRepository.find();
  }

  async get(query: GetParamsDto<Weapon, ["characters", "createdAt", "updatedAt"]>): Promise<Weapon[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { version, take, skip, ...ref } = query;

    return await this.weaponsRepository.find({
      where: {
        ...ref,
        version: version && {
          id: version.id
        }
      },
      relations: {
        characters: false
      },
      take: take,
      skip: skip,
    });
  }

  async getOne(query: GetOneDto<Weapon>): Promise<Weapon> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { version, ...ref } = parsed.data;

    return await this.weaponsRepository.findOne({
      where: {
        ...ref,
        version: version && {
          version_string: version
        }
      },
    });
  }


}
