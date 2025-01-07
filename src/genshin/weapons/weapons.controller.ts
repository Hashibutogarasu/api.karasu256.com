import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { CreateWeaponDto, DeleteWeaponDto, FindWeaponBySlugDto, FindWeaponDto, UpdateWeaponDto } from './weapon.dto';
import { AdminGuard } from '@/user/admin/admin.guard';
import { ApiExtraModels } from '@nestjs/swagger';

@Controller('genshin/weapons')
@ApiExtraModels(FindWeaponDto, CreateWeaponDto, DeleteWeaponDto, UpdateWeaponDto, FindWeaponBySlugDto)
export class WeaponsController {
  constructor(
    private readonly weaponsService: WeaponsService
  ) { }

  @Get()
  async findAll(@Query() dto: FindWeaponDto) {
    return await this.weaponsService.find(dto);
  }

  @Get(':slug')
  async findOne(@Param() dto: FindWeaponBySlugDto) {
    return await this.weaponsService.findOne(dto);
  }

  @UseGuards(AdminGuard)
  @Post('create')
  async create(@Body() dto: CreateWeaponDto) {
    return await this.weaponsService.create(dto);
  }

  @UseGuards(AdminGuard)
  @Post('update')
  async update(@Body() dto: UpdateWeaponDto) {
    return await this.weaponsService.update(dto);
  }

  @UseGuards(AdminGuard)
  @Delete('delete')
  async delete(@Body() dto: DeleteWeaponDto) {
    return await this.weaponsService.delete(dto);
  }
}
