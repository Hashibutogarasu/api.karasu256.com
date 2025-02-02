import { Weapon } from '@/entities/genshin/wiki/weapons.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWeaponDto, createWeaponSchema, GetWeaponDto, getWeaponSchema, UpdateWeaponDto } from './weapons.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteDto, deleteSchema, GetParamsDto, getParamsSchema } from '@karasu-lab/karasu-lab-sdk';

@Injectable()
export class WeaponsService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Weapon)
    private readonly weaponsService: Repository<Weapon>
  ) { }

  async get(dto: GetWeaponDto): Promise<Weapon[]> {
    const parsed = getWeaponSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { page, limit, version, ...ref } = dto;

    return await this.weaponsService.find({
      where: {
        ...ref,
        version: {
          version_string: version,
        }
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
    });
  }

  async getOne(params: GetParamsDto): Promise<Weapon> {
    const parsed = getParamsSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    return await this.weaponsService.findOne({
      where: {
        id: params
      },
    });
  }

  async create(dto: CreateWeaponDto): Promise<Weapon> {
    const parsed = createWeaponSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { version, ...ref } = dto;

    const versionExists = await this.weaponsService.findOne({
      where: {
        version: {
          version_string: version,
        }
      }
    })

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    const weapon = this.weaponsService.create({
      ...ref,
      version: versionExists
    });

    return await this.weaponsService.save(weapon);
  }

  async update(dto: UpdateWeaponDto): Promise<void> {
    const parsed = createWeaponSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const weapon = await this.weaponsService.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!weapon) {
      throw new BadRequestException('Weapon not found');
    }

    const { version, ...ref } = dto;

    const versionExists = await this.weaponsService.findOne({
      where: {
        version: {
          version_string: version,
        }
      }
    })

    if (!versionExists) {
      throw new BadRequestException('このバージョンは存在しません');
    }

    await this.weaponsService.update(dto.id, {
      ...ref,
      version: versionExists
    });
  }

  async delete(dto: DeleteDto): Promise<void> {
    const parsed = deleteSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const weapon = await this.weaponsService.findOne({
      where: {
        id: dto.id,
      },
    });

    if (!weapon) {
      throw new BadRequestException('Weapon not found');
    }

    await this.weaponsService.delete({ id: dto.id, });
  }
}
