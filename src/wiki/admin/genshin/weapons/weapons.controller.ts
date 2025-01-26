import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { Weapon } from '@/entities/genshin/wiki/weapons.entity';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Authorization } from '@nestjs-cognito/auth';
import { zodToOpenAPI } from 'nestjs-zod';
import { CreateWeaponDto, createWeaponSchema, DeleteWeaponDto, deleteWeaponSchema, GetWeaponDto, GetWeaponParamsDto, getWeaponParamsSchema, getWeaponSchema, UpdateWeaponDto } from './weapons.dto';
import { updateCharacterSchema } from '../characters/characters.dto';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('wiki/genshin/admin/weapons')
export class WeaponsController implements IBaseControllerAndService {
  constructor(
    private readonly weaponsService: WeaponsService,
  ) { }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getWeaponSchema),
  })
  @Get()
  async get(@Query() dto: GetWeaponDto): Promise<Weapon[]> {
    return this.weaponsService.get(dto);
  }

  @ApiParam({
    name: 'param',
    schema: zodToOpenAPI(getWeaponParamsSchema),
  })
  @Get(':id')
  async getOne(@Param() params: GetWeaponParamsDto): Promise<Weapon> {
    return this.weaponsService.getOne(params);
  }

  @ApiBody({
    schema: zodToOpenAPI(createWeaponSchema),
  })
  @Post()
  async create(@Body() dto: CreateWeaponDto): Promise<Weapon> {
    return this.weaponsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateCharacterSchema),
  })
  @Put()
  async update(@Body() dto: UpdateWeaponDto): Promise<void> {
    return this.weaponsService.update(dto);
  }

  @ApiParam({
    name: 'param',
    schema: zodToOpenAPI(deleteWeaponSchema),
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteWeaponDto): Promise<void> {
    return this.weaponsService.delete(dto);
  }
}
