import { Country } from '@/entities/wiki/genshin/countries.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { Authorization } from '@nestjs-cognito/auth';
import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema, updateSchema } from './countries.dto';
import { CreateDto, DeleteDto, UpdateDto } from '@/utils/dto';
import { CountriesService } from './countries.service';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller("wiki/genshin/admin/regions")
export class CountriesController implements IBaseAdminCaS<Country> {
  constructor(
    private readonly service: CountriesService,
  ) { }

  @ApiOperation({
    operationId: "createRegion",
    summary: "Create region",
  })

  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: CreateDto<Country>): Promise<Country> {
    return this.service.create(dto);
  }

  @ApiOperation({
    operationId: "updateRegion",
    summary: "Update region",
  })
  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<Country>): Promise<void> {
    return this.service.update(dto);
  }

  @ApiOperation({
    operationId: "deleteRegion",
    summary: "Delete region",
  })
  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete(":id")
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.service.delete(dto);
  }
}
