import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ArtifactSetsService } from './artifact-sets.service';
import { CreateArtifactSetsDto, DeleteArtifactSetsDto, FindArtifactSetsBySlugDto, FindArtifactSetsDto, UpdateArtifactSetsDto } from './artifact-sets.dto';
import { ApiExtraModels } from '@nestjs/swagger';

@Controller('genshin/artifact-sets')
@ApiExtraModels(FindArtifactSetsBySlugDto)
export class ArtifactSetsController {
  constructor(
    private readonly artifactSetsService: ArtifactSetsService
  ) { }

  @Get()
  async findAll() {
    return await this.artifactSetsService.findAll();
  }

  @Get(':slug')
  async findBySlug(@Param() dto: FindArtifactSetsBySlugDto) {
    return await this.artifactSetsService.findBySlug(dto);
  }

  @Get('find')
  async find(@Body() dto: FindArtifactSetsDto) {
    return await this.artifactSetsService.find(dto);
  }

  @Post('create')
  async create(@Body() dto: CreateArtifactSetsDto) {
    return await this.artifactSetsService.create(dto);
  }

  @Post('update')
  async update(@Body() dto: UpdateArtifactSetsDto) {
    return await this.artifactSetsService.update(dto);
  }

  @Delete('delete')
  async delete(@Body() dto: DeleteArtifactSetsDto) {
    return await this.artifactSetsService.delete(dto);
  }
}
