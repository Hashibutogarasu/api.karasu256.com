import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { Weapon } from '@/entities/genshin/wiki/weapons.entity';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { Authorization, PublicRoute } from '@nestjs-cognito/auth';
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema, getSchema, updateSchema } from './weapons.dto';
import { CreateDto, DeleteDto, GetOneDto, GetParamsDto, UpdateDto } from '@/utils/dto';

@Controller('wiki/genshin/weapons')
export class WeaponsController implements IBaseControllerAndService {
  constructor(
    private readonly weaponsService: WeaponsService,
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("get")
  async get(@Body() query: GetParamsDto<Weapon, ["characters", "createdAt", "updatedAt"]>): Promise<Weapon[]> {
    return this.weaponsService.get(query);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post('getOne')
  async getOne(@Body() query: GetOneDto<Weapon>): Promise<Weapon> {
    return this.weaponsService.getOne(query);
  }


  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: CreateDto<Weapon>): Promise<Weapon> {
    return this.weaponsService.create(dto);
  }

  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<Weapon>): Promise<void> {
    return this.weaponsService.update(dto);
  }

  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.weaponsService.delete(dto);
  }
}
