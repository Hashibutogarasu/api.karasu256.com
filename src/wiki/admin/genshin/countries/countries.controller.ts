import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCountryDto, createCountrySchema, DeleteCountryDto, deleteCountrySchema, GetCountriesDto, GetCountriesParamsDto, getCountriesParamsSchema, getCountriesSchema, UpdateCountryDto, updateCountrySchema } from './contries.dto';
import { zodToOpenAPI } from 'nestjs-zod';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController implements IBaseControllerAndService {
  constructor(
    private readonly service: CountriesService,
  ) { }

  @ApiParam({
    name: 'query',
    schema: zodToOpenAPI(getCountriesSchema),
  })
  @Get()
  async get(@Param() params: GetCountriesDto): Promise<any[]> {
    return this.service.get(params);
  }

  @ApiParam({
    name: 'param',
    schema: zodToOpenAPI(getCountriesParamsSchema),
  })
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
    name: 'param',
    schema: zodToOpenAPI(deleteCountrySchema),
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteCountryDto): Promise<void> {
    return this.service.delete(dto);
  }
}
