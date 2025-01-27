import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { Authorization } from '@nestjs-cognito/auth';
import { CreateArtifactDto, createArtifactSchema, DeleteArtifactDto, deleteArtifactSchema, GetArtifactDto, GetArtifactParamsDto, getArtifactParamsSchema, getArtifactSchema, UpdateArtifactDto, updateArtifactSchema } from './artifacts.dto';
import { Artifacts } from '@/entities/genshin/wiki/artifacts.entity';
import { zodToOpenAPI } from 'nestjs-zod';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
  @Controller('wiki/genshin/admin/artifacts')
export class ArtifactsController implements IBaseControllerAndService {
  constructor(
    private readonly artifactsService: ArtifactsService
  ) { }

  @ApiParam({
    name: 'query',
    schema: zodToOpenAPI(getArtifactSchema),
  })
  @Get()
  async get(@Param() params: GetArtifactDto): Promise<Artifacts[]> {
    return this.artifactsService.get(params);
  }

  @ApiParam({
    name: 'param',
    schema: zodToOpenAPI(getArtifactParamsSchema),
  })
  @Get(':id')
  async getOne(@Param() params: GetArtifactParamsDto): Promise<Artifacts> {
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
    name: 'param',
    schema: zodToOpenAPI(deleteArtifactSchema),
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteArtifactDto): Promise<void> {
    return this.artifactsService.delete(dto);
  }
}
