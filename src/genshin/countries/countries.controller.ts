import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDto, CreateCountryDtoSchema, DeleteCountryDto, DeleteCountryDtoSchema, FindCountryDto, FindCountryDtoSchema, UpdateCountryDto, UpdateCountryDtoSchema } from './countries.dto';
import { ApiBody, ApiExtraModels, ApiParam, getSchemaPath } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { ZodValidationPipe } from '@/pipe/zod_validation_pipe';

@Controller('genshin/countries')
export class CountriesController {
  constructor(
    private readonly countriesService: CountriesService,
  ) { }

  @Get()
  async getCountries() {
    return this.countriesService.find();
  }

  @ApiParam({
    name: 'slug',
    schema: zodToOpenAPI(FindCountryDtoSchema),
  })
  @ApiExtraModels(FindCountryDto)
  @Get('profile/:slug')
  async getCountryBySlug(@Param(new ZodValidationPipe(FindCountryDtoSchema)) dto: FindCountryDto) {
    return this.countriesService.findBySlug(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(CreateCountryDtoSchema),
  })
  @Post('create')
  async createCountry(@Body(new ZodValidationPipe(CreateCountryDtoSchema)) dto: CreateCountryDto) {
    return this.countriesService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(UpdateCountryDtoSchema),
  })
  @Post('update')
  async updateCountry(@Body(new ZodValidationPipe(UpdateCountryDtoSchema)) dto: UpdateCountryDto) {
    return this.countriesService.update(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(DeleteCountryDtoSchema),
  })
  @Delete('delete')
  async deleteCountry(@Body(new ZodValidationPipe(DeleteCountryDtoSchema)) dto: DeleteCountryDto) {
    return this.countriesService.delete(dto);
  }
}
