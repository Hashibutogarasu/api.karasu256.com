import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDto, DeleteCountryDto, FindCountryDto, UpdateCountryDto } from './countries.dto';

@Controller('genshin/countries')
export class CountriesController {
  constructor(
    private readonly countriesService: CountriesService,
  ) { }

  @Get()
  async getCountries() {
    return this.countriesService.find();
  }

  @Get('profile/:slug')
  async getCountryBySlug(@Param() dto: FindCountryDto) {
    return this.countriesService.findBySlug(dto);
  }

  @Post('create')
  async createCountry(@Body() dto: CreateCountryDto) {
    return this.countriesService.create(dto);
  }

  @Post('update')
  async updateCountry(@Body() dto: UpdateCountryDto) {
    return this.countriesService.update(dto);
  }

  @Delete('delete')
  async deleteCountry(@Body() dto: DeleteCountryDto) {
    return this.countriesService.delete(dto);
  }
}
