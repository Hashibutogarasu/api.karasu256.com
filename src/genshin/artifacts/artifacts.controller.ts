import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { CreateArtifactDto, DeleteArtifactDto, FindArtifactBySlugDto, UpdateArtifactDto } from './artifacts.dto';
import { ApiExtraModels } from '@nestjs/swagger';

@Controller('genshin/artifacts')
@ApiExtraModels(CreateArtifactDto, DeleteArtifactDto, UpdateArtifactDto, FindArtifactBySlugDto)
export class ArtifactsController {
  constructor(
    private readonly artifactsService: ArtifactsService
  ) { }

  @Get()
  async findAll() {
    return await this.artifactsService.findAll();
  }

  @Get(':slug')
  async findOne(@Param() dto: FindArtifactBySlugDto) {
    return await this.artifactsService.findOne(dto);
  }

  @Post('create')
  async create(@Body() dto: CreateArtifactDto) {
    return await this.artifactsService.create(dto);
  }

  @Post('update')
  async update(@Body() dto: UpdateArtifactDto) {
    return await this.artifactsService.update(dto);
  }

  @Delete('delete')
  async delete(@Body() dto: DeleteArtifactDto) {
    return await this.artifactsService.delete(dto);
  }
}
