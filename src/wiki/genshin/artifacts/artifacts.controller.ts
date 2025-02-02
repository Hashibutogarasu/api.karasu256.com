import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { Authorization, PublicRoute } from '@nestjs-cognito/auth';
import { CreateArtifactDto, createArtifactSchema, GetArtifactDto, getArtifactSchema, UpdateArtifactDto, updateArtifactSchema } from './artifacts.dto';
import { Artifacts } from '@/entities/genshin/wiki/artifacts.entity';
import { zodToOpenAPI } from 'nestjs-zod';
import { DeleteDto, GetParamsDto } from '@karasu-lab/karasu-lab-sdk';

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
    type: getSchemaPath(GetArtifactDto),
    schema: zodToOpenAPI(getArtifactSchema),
  })
  @PublicRoute()
  @Get()
  async get(@Query() params: GetArtifactDto): Promise<Artifacts[]> {
    return this.artifactsService.get(params);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @PublicRoute()
  @Get(':id')
  async getOne(@Param() params: GetParamsDto): Promise<Artifacts> {
    return this.artifactsService.getOne(params);
  }

  @ApiBody({
    schema: zodToOpenAPI(createArtifactSchema),
  })
  @Post()
  async create(dto: CreateArtifactDto): Promise<Artifacts> {
    return this.artifactsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateArtifactSchema),
  })
  @Put()
  async update(@Body() dto: UpdateArtifactDto): Promise<void> {
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
