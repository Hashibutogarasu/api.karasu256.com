import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { ArtifactSetsService } from './artifact-sets.service';
import { ArtifactSets } from '@/entities/genshin/wiki/artifact-sets.entity';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { Authorization, PublicRoute } from '@nestjs-cognito/auth';
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema, getSchema, updateSchema } from './artifact-sets.dto';
import { CreateDto, DeleteDto, GetOneDto, GetParamsDto, UpdateDto } from '@/utils/dto';

@Controller('wiki/genshin/artifact-sets')
export class ArtifactSetsController implements IBaseControllerAndService {
  constructor(
    private readonly service: ArtifactSetsService,
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("get")
  async get(@Body() query: GetParamsDto<ArtifactSets, ["characters", "artifacts", "createdAt", "updatedAt"]>): Promise<ArtifactSets[]> {
    return this.service.get(query);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post('getOne')
  async getOne(@Body() query: GetOneDto<ArtifactSets>): Promise<ArtifactSets> {
    return this.service.getOne(query);
  }

  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: CreateDto<ArtifactSets>): Promise<ArtifactSets> {
    return this.service.create(dto);
  }

  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<ArtifactSets>): Promise<void> {
    return this.service.update(dto);
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
    return this.service.delete(dto);
  }
}
