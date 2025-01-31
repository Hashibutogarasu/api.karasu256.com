import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateCountryDto, createCountrySchema, DeleteCountryDto, deleteCountrySchema, GetCountriesDto, GetCountriesParamsDto, getCountriesParamsSchema, getCountriesSchema, UpdateCountryDto, updateCountrySchema } from './contries.dto';
import { zodToOpenAPI } from 'nestjs-zod';
import { ApiBody, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { CountriesService } from './countries.service';
import { PublicRoute } from '@nestjs-cognito/auth';

@Controller('wiki/genshin/countries')
export class CountriesController implements IBaseControllerAndService {
  constructor(
    private readonly service: CountriesService,
  ) { }

  @ApiQuery({
    name: 'query',
    type: getSchemaPath(GetCountriesDto),
    schema: zodToOpenAPI(getCountriesSchema),
  })
  @PublicRoute()
  @Get()
  async get(@Query() params: GetCountriesDto): Promise<any[]> {
    return this.service.get(params);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @PublicRoute()
  @Get(':id')
  async getOne(@Param() params: GetCountriesParamsDto): Promise<any> {
    return this.service.getOne(params);
  }

  @ApiBody({
    schema: zodToOpenAPI(createCountrySchema),
  })
  @Post()
  async create(@Body() dto: CreateCountryDto): Promise<any> {
    return this.service.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateCountrySchema),
  })
  @Put()
  async update(@Body() dto: UpdateCountryDto): Promise<void> {
    return this.service.update(dto);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteCountryDto): Promise<void> {
    return this.service.delete(dto);
  }
}
