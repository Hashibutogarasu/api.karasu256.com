import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { Controller } from '@nestjs/common';
import { VersionsService } from './versions.service';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';

@Controller('versions')
export class VersionsController implements IBaseAdminCaS<VersionsEntity> {
  constructor(
    private readonly versionsService: VersionsService
  ) { }

  async create(dto: CreateDto<VersionsEntity>): Promise<VersionsEntity> {
    return this.versionsService.create(dto);
  }
  async update(dto: UpdateDto<VersionsEntity>): Promise<void> {
    return this.versionsService.update(dto);
  }
  async delete(dto: DeleteDto): Promise<void> {
    return this.versionsService.delete(dto);
  }
}
