import { Weapon } from '@/entities/genshin/wiki/weapons.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { CreateDto, DeleteDto, deleteSchema, GetOneDto, GetParamsDto, UpdateDto } from '@/utils/dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createSchema, getSchema, updateSchema } from './weapons.dto';

@Injectable()
export class WeaponsService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Weapon)
    private readonly weaponsService: Repository<Weapon>
  ) { }

  async get(dto: GetParamsDto<Weapon>): Promise<Weapon[]> {
    const parsed = getSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { page, limit, characters, ...ref } = dto;

    return await this.weaponsService.find({
      where: {
        ...ref,
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
    });
  }

  async getOne(params: GetOneDto<Weapon>): Promise<Weapon> {
    const parsed = getSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { characters, ...ref } = params;

    return await this.weaponsService.findOne({
      where: {
        ...ref
      },
    });
  }

  async create(dto: CreateDto<Weapon>): Promise<Weapon> {
    const parsed = createSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const { version, ...ref } = dto;

    const versionExists = await this.weaponsService.findOne({
      where: {
        version
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

  async update(dto: UpdateDto<Weapon>): Promise<void> {
    const parsed = updateSchema.safeParse(dto);

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
        version
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
