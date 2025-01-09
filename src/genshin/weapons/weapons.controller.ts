import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { CreateWeaponDto, CreateWeaponDtoSchema, DeleteWeaponDto, DeleteWeaponDtoSchema, FindWeaponBySlugDto, FindWeaponBySlugDtoSchema, FindWeaponDto, FindWeaponDtoSchema, UpdateWeaponDto, UpdateWeaponDtoSchema } from './weapon.dto';
import { AdminGuard } from '@/user/admin/admin.guard';
import { ApiBody, ApiExtraModels, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { ZodValidationPipe } from '@/pipe/zod_validation_pipe';

@Controller('genshin/weapons')
@ApiExtraModels(FindWeaponDto, CreateWeaponDto, DeleteWeaponDto, UpdateWeaponDto, FindWeaponBySlugDto)
export class WeaponsController {
  constructor(
    private readonly weaponsService: WeaponsService
  ) { }

  @ApiQuery({
    required: false,
    name: 'queryParams',
    explode: true,
    type: 'object',
    schema: {
      $ref: getSchemaPath(FindWeaponDto),
    },
  })
  @Get()
  async findAll(@Query(new ZodValidationPipe(FindWeaponDtoSchema)) dto: FindWeaponDto) {
    return await this.weaponsService.find(dto);
  }

  @ApiParam({
    name: 'slug',
    schema: zodToOpenAPI(FindWeaponBySlugDtoSchema),
  })
  @Get(':slug')
  async findOne(@Param() dto: FindWeaponBySlugDto) {
    return await this.weaponsService.findOne(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(CreateWeaponDtoSchema),
  })
  @UseGuards(AdminGuard)
  @Post('create')
  async create(@Body() dto: CreateWeaponDto) {
    return await this.weaponsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(UpdateWeaponDtoSchema),
  })
  @UseGuards(AdminGuard)
  @Post('update')
  async update(@Body() dto: UpdateWeaponDto) {
    return await this.weaponsService.update(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(DeleteWeaponDtoSchema),
  })
  @UseGuards(AdminGuard)
  @Delete('delete')
  async delete(@Body() dto: DeleteWeaponDto) {
    return await this.weaponsService.delete(dto);
  }
}
