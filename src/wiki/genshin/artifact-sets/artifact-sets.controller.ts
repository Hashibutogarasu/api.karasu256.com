import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { ArtifactSetsService } from './artifact-sets.service';
import { ArtifactSets } from '@/entities/genshin/wiki/artifact-sets.entity';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { Authorization, PublicRoute } from '@nestjs-cognito/auth';
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema, getSchema, updateSchema } from './artifact-sets.dto';
import { CreateDto, DeleteDto, GetOneDto, GetParamsDto, UpdateDto } from '@/utils/dto';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('wiki/genshin/artifact-sets')
export class ArtifactSetsController implements IBaseControllerAndService {
  constructor(
    private readonly service: ArtifactSetsService,
  ) { }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Get()
  async get(@Query() params: GetParamsDto<ArtifactSets, ["characters", "artifacts", "createdAt", "updatedAt"]>): Promise<ArtifactSets[]> {
    return this.service.get(params);
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Get('getOne')
  async getOne(params: GetOneDto<ArtifactSets>): Promise<ArtifactSets> {
    return this.service.getOne(params);
  }

  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(dto: CreateDto<ArtifactSets>): Promise<ArtifactSets> {
    return this.service.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(dto: UpdateDto<ArtifactSets>): Promise<void> {
    return this.service.update(dto);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @Delete(':id')
  async delete(dto: DeleteDto): Promise<void> {
    return this.service.delete(dto);
  }
}
