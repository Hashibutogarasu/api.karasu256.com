import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { VersionsService } from './versions.service';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { CreateDto, DeleteDto, GetParamsDto, UpdateDto } from '@/utils/dto';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema, getSchema, updateSchema } from './versions.dto';
import { Authorization, PublicRoute } from '@nestjs-cognito/auth';

@Controller('wiki/genshin/versions')
export class VersionsController implements IBaseControllerAndService {
  constructor(
    private readonly versionsService: VersionsService
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("get")
  async get(@Body() query: GetParamsDto<VersionsEntity, ["createdAt", "updatedAt"]>): Promise<VersionsEntity[]> {
    return this.versionsService.get(query);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post('getOne')
  async getOne(@Body() query: GetParamsDto<VersionsEntity, ["weapons", "artifacts", "characters", "countries", "artifact_sets", "createdAt", "updatedAt"]>): Promise<VersionsEntity> {
    return this.versionsService.getOne(query);
  }

  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: CreateDto<VersionsEntity>): Promise<VersionsEntity> {
    return this.versionsService.create(dto);
  }

  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<VersionsEntity>): Promise<void> {
    return this.versionsService.update(dto);
  }

  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.versionsService.delete(dto);
  }
}
