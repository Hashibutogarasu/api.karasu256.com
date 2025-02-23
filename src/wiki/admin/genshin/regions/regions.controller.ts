import { Country } from '@/entities/wiki/genshin/countries.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { Controller } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';

@Controller('regions')
export class RegionsController implements IBaseAdminCaS<Country>{
  constructor(
    private readonly regionsService: RegionsService,
  ) { }

  async create(dto: CreateDto<Country>): Promise<Country> {
    return await this.regionsService.create(dto);
  }

  async update(dto: UpdateDto<Country>): Promise<void> {
    return await this.regionsService.update(dto);
  }

  async delete(dto: DeleteDto): Promise<void> {
    return await this.regionsService.delete(dto);
  }
}
