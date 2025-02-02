import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { Weapon } from '@/entities/genshin/wiki/weapons.entity';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { Authorization, PublicRoute } from '@nestjs-cognito/auth';
import { zodToOpenAPI } from 'nestjs-zod';
import { CreateWeaponDto, createWeaponSchema, GetWeaponDto, getWeaponSchema, UpdateWeaponDto } from './weapons.dto';
import { updateCharacterSchema } from '../characters/characters.dto';
import { DeleteDto, GetParamsDto } from '@karasu-lab/karasu-lab-sdk';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('wiki/genshin/weapons')
export class WeaponsController implements IBaseControllerAndService {
  constructor(
    private readonly weaponsService: WeaponsService,
  ) { }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getWeaponSchema),
  })
  @PublicRoute()
  @Get()
  async get(@Query() params: GetWeaponDto): Promise<Weapon[]> {
    return this.weaponsService.get(params);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @PublicRoute()
  @Get(':id')
  async getOne(@Param() params: GetParamsDto): Promise<Weapon> {
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
    name: 'id',
    type: 'string',
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.weaponsService.delete(dto);
  }
}
