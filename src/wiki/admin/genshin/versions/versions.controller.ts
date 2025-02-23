import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { VersionsService } from './versions.service';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';
import { Authorization } from '@nestjs-cognito/auth';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema, updateSchema } from './versions.dto';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('wiki/genshin/admin/versions')
export class VersionsController implements IBaseAdminCaS<VersionsEntity> {
  constructor(
    private readonly versionsService: VersionsService
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(createSchema)
  })
  @Post()
  async create(@Body() dto: CreateDto<VersionsEntity>): Promise<VersionsEntity> {
    return await this.versionsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateSchema)
  })
  @Put()
  async update(@Body() dto: UpdateDto<VersionsEntity>): Promise<void> {
    return await this.versionsService.update(dto);
  }

  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete("id")
  async delete(@Body() dto: DeleteDto): Promise<void> {
    return await this.versionsService.delete(dto);
  }
}
