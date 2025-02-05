import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, DeleteDto, UpdateDto } from '@/utils/dto';
import { Authorization } from '@nestjs-cognito/auth';
import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { VersionsService } from './versions.service';
import { createSchema, updateSchema } from './versions.dto';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('versions')
export class VersionsController implements IBaseAdminCaS<VersionsEntity> {
  constructor(
    private readonly versionsService: VersionsService
  ) { }

  @ApiOperation({
    operationId: "createVersion",
    summary: "Create version",
  })

  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: CreateDto<VersionsEntity>): Promise<VersionsEntity> {
    return this.versionsService.create(dto);
  }

  @ApiOperation({
    operationId: "updateVersion",
    summary: "Update version",
  })
  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<VersionsEntity>): Promise<void> {
    return this.versionsService.update(dto);
  }

  @ApiOperation({
    operationId: "deleteVersion",
    summary: "Delete version",
  })
  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete(":id")
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.versionsService.delete(dto);
  }
}
