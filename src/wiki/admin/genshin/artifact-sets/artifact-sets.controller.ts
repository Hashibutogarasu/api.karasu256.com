import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { ArtifactSetsService } from './artifact-sets.service';
import { CreateArtifactSetDto, createArtifactSetSchema, DeleteArtifactSetDto, deleteArtifactSetSchema, GetArtifactSetDto, GetArtifactSetParamsDto, getArtifactSetParamsSchema, getArtifactSetSchema, UpdateArtifactSetDto, updateArtifactSetSchema } from './artifact-sets.dto';
import { ArtifactSets } from '@/entities/genshin/wiki/artifact-sets.entity';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { Authorization } from '@nestjs-cognito/auth';
import { zodToOpenAPI } from 'nestjs-zod';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('artifact-sets')
export class ArtifactSetsController implements IBaseControllerAndService {
  constructor(
    private readonly service: ArtifactSetsService,
  ) { }

  @ApiParam({
    name: 'query',
    schema: zodToOpenAPI(getArtifactSetSchema),
  })
  @Get()
  async get(params: GetArtifactSetDto): Promise<ArtifactSets[]> {
    return this.service.get(params);
  }

  @ApiParam({
    name: 'param',
    schema: zodToOpenAPI(getArtifactSetParamsSchema),
  })
  @Get(':id')
  async getOne(params: GetArtifactSetParamsDto): Promise<ArtifactSets> {
    return this.service.getOne(params);
  }

  @ApiBody({
    schema: zodToOpenAPI(createArtifactSetSchema),
  })
  @Post()
  async create(dto: CreateArtifactSetDto): Promise<ArtifactSets> {
    return this.service.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateArtifactSetSchema),
  })
  @Put()
  async update(dto: UpdateArtifactSetDto): Promise<void> {
    return this.service.update(dto);
  }

  @ApiParam({
    name: 'param',
    schema: zodToOpenAPI(deleteArtifactSetSchema),
  })
  @Delete(':id')
  async delete(dto: DeleteArtifactSetDto): Promise<void> {
    return this.service.delete(dto);
  }
}
