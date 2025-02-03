import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { Authorization, PublicRoute } from '@nestjs-cognito/auth';
import { Artifacts } from '@/entities/genshin/wiki/artifacts.entity';
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema, getSchema, updateSchema } from './artifacts.dto';
import { CreateDto, DeleteDto, GetParamsDto, GetOneDto, UpdateDto } from '@/utils/dto';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('wiki/genshin/artifacts')
export class ArtifactsController implements IBaseControllerAndService {
  constructor(
    private readonly artifactsService: ArtifactsService
  ) { }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Get()
  async get(@Query() params: GetParamsDto<Artifacts, ["createdAt", "updatedAt"]>): Promise<Artifacts[]> {
    return this.artifactsService.get(params);
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Get('getOne')
  async getOne(@Param() params: GetOneDto<Artifacts>): Promise<Artifacts> {
    return this.artifactsService.getOne(params);
  }

  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(dto: CreateDto<Artifacts>): Promise<Artifacts> {
    return this.artifactsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<Artifacts>): Promise<void> {
    return this.artifactsService.update(dto);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.artifactsService.delete(dto);
  }
}
