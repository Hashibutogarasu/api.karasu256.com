import { GenshinWeaponEntity } from '@/entities/genshin/weapon.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWeaponDto, DeleteWeaponDto, FindWeaponDto, UpdateWeaponDto } from './weapon.dto';

@Injectable()
export class WeaponsService {
  constructor(
    @InjectRepository(GenshinWeaponEntity)
    private weaponRepository: Repository<GenshinWeaponEntity>
  ) { }

  async find(dto: FindWeaponDto): Promise<GenshinWeaponEntity[]> {
    return await this.weaponRepository.find({
      where: dto
    });
  }

  async findOne(dto: FindWeaponDto): Promise<GenshinWeaponEntity> {
    return await this.weaponRepository.findOne({
      where: dto
    });
  }

  async create(weapon: CreateWeaponDto): Promise<GenshinWeaponEntity> {
    const data = await this.weaponRepository.findOne({
      where: {
        slug: weapon.slug
      }
    });

    if (data) {
      throw new HttpException('Weapon already exists', 400);
    }

    return await this.weaponRepository.save(weapon);
  }

  async update(weapon: UpdateWeaponDto): Promise<GenshinWeaponEntity> {
    const data = await this.weaponRepository.findOne({
      where: {
        id: weapon.id
      }
    });

    if (!data) {
      throw new HttpException('Weapon not found', 404);
    }

    return await this.weaponRepository.save(weapon);
  }

  async delete(dto: DeleteWeaponDto): Promise<void> {
    await this.weaponRepository.delete({
      id: dto.id
    });
  }
}
