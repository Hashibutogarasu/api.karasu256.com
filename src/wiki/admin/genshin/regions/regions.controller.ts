import { Country } from '@/entities/wiki/genshin/countries.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';
import { Authorization } from '@nestjs-cognito/auth';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema } from '../artifact-sets/artifact-sets.dto';
import { updateSchema } from './regions.dto';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('wiki/genshin/admin/regions')
export class RegionsController implements IBaseAdminCaS<Country> {
  constructor(
    private readonly regionsService: RegionsService,
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(createSchema)
  })
  @Post()
  async create(@Body() dto: CreateDto<Country>): Promise<Country> {
    return await this.regionsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateSchema)
  })
  @Put()
  async update(@Body() dto: UpdateDto<Country>): Promise<void> {
    return await this.regionsService.update(dto);
  }

  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete("id")
  async delete(@Body() dto: DeleteDto): Promise<void> {
    return await this.regionsService.delete(dto);
  }
}
