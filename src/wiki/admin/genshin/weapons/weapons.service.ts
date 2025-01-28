import { Weapon } from '@/entities/genshin/wiki/weapons.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWeaponDto, createWeaponSchema, DeleteWeaponDto, GetWeaponDto, GetWeaponParamsDto, getWeaponParamsSchema, getWeaponSchema, UpdateWeaponDto } from './weapons.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

    const { page, limit, ...ref } = dto;

    return await this.weaponsService.find({
      where: {
        ...ref,
      },
      skip: page > 0 ? (page - 1) * limit : undefined,
    });
  }

  async getOne(params: GetWeaponParamsDto): Promise<Weapon> {
    const parsed = getWeaponParamsSchema.safeParse(params);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    return await this.weaponsService.findOne({
      where: {
        id: params.id,
      },
    });
  }

  async create(dto: CreateWeaponDto): Promise<Weapon> {
    const parsed = createWeaponSchema.safeParse(dto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const weapon = this.weaponsService.create(dto);

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

    await this.weaponsService.update({ id: dto.id, }, dto);
  }

  async delete(dto: DeleteWeaponDto): Promise<void> {
    const parsed = getWeaponParamsSchema.safeParse(dto);

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
