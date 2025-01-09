import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ArtifactSetsService } from './artifact-sets.service';
import { CreateArtifactSetsDto, CreateArtifactSetsDtoSchema, DeleteArtifactSetsDto, DeleteArtifactSetsDtoSchema, FindArtifactSetsBySlugDto, FindArtifactSetsBySlugDtoSchema, FindArtifactSetsDto, FindArtifactSetsDtoSchema, UpdateArtifactSetsDto, UpdateArtifactSetsDtoSchema } from './artifact-sets.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { zodToOpenAPI, ZodValidationPipe } from 'nestjs-zod';

@Controller('genshin/artifact-sets')
export class ArtifactSetsController {
  constructor(
    private readonly artifactSetsService: ArtifactSetsService
  ) { }

  @Get()
  async findAll() {
    return await this.artifactSetsService.findAll();
  }

  @ApiParam({
    name: 'slug',
    schema: zodToOpenAPI(FindArtifactSetsBySlugDtoSchema),
  })
  @Get(':slug')
  async findBySlug(@Param(new ZodValidationPipe(FindArtifactSetsBySlugDtoSchema)) dto: FindArtifactSetsBySlugDto) {
    return await this.artifactSetsService.findBySlug(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(FindArtifactSetsDtoSchema),
  })
  @Get('find')
  async find(@Body(new ZodValidationPipe(FindArtifactSetsDtoSchema)) dto: FindArtifactSetsDto) {
    return await this.artifactSetsService.find(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(CreateArtifactSetsDtoSchema),
  })
  @Post('create')
  async create(@Body(new ZodValidationPipe(CreateArtifactSetsDtoSchema)) dto: CreateArtifactSetsDto) {
    return await this.artifactSetsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(UpdateArtifactSetsDtoSchema),
  })
  @Post('update')
  async update(@Body(new ZodValidationPipe(UpdateArtifactSetsDtoSchema)) dto: UpdateArtifactSetsDto) {
    return await this.artifactSetsService.update(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(DeleteArtifactSetsDtoSchema),
  })
  @Delete('delete')
  async delete(@Body(new ZodValidationPipe(DeleteArtifactSetsDtoSchema)) dto: DeleteArtifactSetsDto) {
    return await this.artifactSetsService.delete(dto);
  }
}
