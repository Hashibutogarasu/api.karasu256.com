import { Weapon } from '@/entities/wiki/genshin/weapons.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { CreateDto, DeleteDto, deleteSchema, GetOneDto, GetParamsDto, UpdateDto } from '@/utils/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSchema, getSchema, updateSchema } from './weapons.dto';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';

@Injectable()
export class WeaponsService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Weapon)
    private readonly weaponsRepository: Repository<Weapon>,

    @InjectRepository(VersionsEntity)
    private readonly versionsRepository: Repository<VersionsEntity>
  ) { }

  async get(query: GetParamsDto<Weapon, ["characters", "createdAt", "updatedAt"]>): Promise<Weapon[]> {
    const parsed = getSchema.safeParse(query);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { version, take, skip, ...ref } = query;

    return await this.weaponsRepository.find({
      where: {
        ...ref,
        version: {
          id: version.id
        }
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

  async create(dto: CreateDto<Weapon>): Promise<Weapon> {
    const parsed = createSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { characters, version, ...ref } = dto;

    const versionExists = await this.weaponsRepository.findOne({
      where: {
        version: {
          version_string: version.version_string
        }
      }
    })

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    const weapon = this.weaponsRepository.create({
      ...ref,
      version: versionExists
    });

    return await this.weaponsRepository.save(weapon);
  }

  async update(dto: UpdateDto<Weapon>): Promise<void> {
    const parsed = updateSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const weapon = await this.weaponsRepository.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!weapon) {
      throw new BadRequestException('Weapon not found');
    }

    const { characters, version, ...ref } = dto;

    const versionExists = await this.weaponsRepository.findOne({
      where: {
        version: {
          version_string: version.version_string
        }
      }
    })

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    await this.weaponsRepository.update(dto.id, {
      ...ref,
      version: versionExists
    });
  }

  async delete(dto: DeleteDto): Promise<void> {
    const parsed = deleteSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const weapon = await this.weaponsRepository.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!weapon) {
      throw new BadRequestException('Weapon not found');
    }

    await this.weaponsRepository.delete({ id: dto.id, });
  }
}
