import { Weapon } from '@/entities/wiki/genshin/weapons.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';
import { Authorization } from '@nestjs-cognito/auth';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema } from '../artifact-sets/artifact-sets.dto';
import { updateSchema } from './weapons.dto';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('wiki/genshin/admin/weapons')
export class WeaponsController implements IBaseAdminCaS<Weapon> {
  constructor(
    private readonly weaponsService: WeaponsService
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(createSchema)
  })
  @Post()
  async create(@Body() dto: CreateDto<Weapon>): Promise<Weapon> {
    return await this.weaponsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateSchema)
  })
  @Put()
  async update(@Body() dto: UpdateDto<Weapon>): Promise<void> {
    return await this.weaponsService.update(dto);
  }

  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete(":id")
  async delete(@Body() dto: DeleteDto): Promise<void> {
    return await this.weaponsService.delete(dto);
  }
}
