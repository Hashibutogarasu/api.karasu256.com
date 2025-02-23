import { Weapon } from '@/entities/wiki/genshin/weapons.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { Controller } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';

@Controller('weapons')
export class WeaponsController implements IBaseAdminCaS<Weapon>{
  constructor(
    private readonly weaponsService: WeaponsService
  ) { }

  async create(dto: CreateDto<Weapon>): Promise<Weapon> {
    return this.weaponsService.create(dto);
  }

  async update(dto: UpdateDto<Weapon>): Promise<void> {
    return this.weaponsService.update(dto);
  }

  async delete(dto: DeleteDto): Promise<void> {
    return this.weaponsService.delete(dto);
  }
}
