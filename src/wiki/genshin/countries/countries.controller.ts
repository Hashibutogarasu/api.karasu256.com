import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { zodToOpenAPI } from 'nestjs-zod';
import { ApiBody, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { CountriesService } from './countries.service';
import { PublicRoute } from '@nestjs-cognito/auth';
import { createSchema, getSchema, updateSchema } from './contries.dto';
import { CreateDto, DeleteDto, GetParamsDto, UpdateDto } from '@/utils/dto';
import { Country } from '@/entities/genshin/wiki/countries.entity';

@Controller('wiki/genshin/countries')
export class CountriesController implements IBaseControllerAndService {
  constructor(
    private readonly service: CountriesService,
  ) { }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Get()
  async get(@Query() params: GetParamsDto<Country>): Promise<Country[]> {
    return this.service.get(params);
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Get('getOne')
  async getOne(@Param() params: GetParamsDto<Country>): Promise<Country> {
    return this.service.getOne(params);
  }

  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: CreateDto<Country>): Promise<Country> {
    return this.service.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<Country>): Promise<void> {
    return this.service.update(dto);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.service.delete(dto);
  }
}
