import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { CreateArtifactDto, CreateArtifactDtoSchema, DeleteArtifactDto, DeleteArtifactDtoSchema, FindArtifactBySlugDto, FindArtifactBySlugDtoSchema, UpdateArtifactDto, UpdateArtifactDtoSchema } from './artifacts.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { createZodDto, zodToOpenAPI, ZodValidationPipe } from 'nestjs-zod';

@Controller('genshin/artifacts')
export class ArtifactsController {
  constructor(
    private readonly artifactsService: ArtifactsService
  ) { }

  @Get()
  async findAll() {
    return await this.artifactsService.findAll();
  }

  @ApiParam({
    name: 'slug',
    schema: zodToOpenAPI(FindArtifactBySlugDtoSchema),
  })
  @Get(':slug')
  async findBySlug(@Param(new ZodValidationPipe(FindArtifactBySlugDtoSchema)) dto: FindArtifactBySlugDto) {
    return await this.artifactsService.findBySlug(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(CreateArtifactDtoSchema),
  })
  @Post('create')
  async create(@Body(new ZodValidationPipe(CreateArtifactDtoSchema)) dto: CreateArtifactDto) {
    return await this.artifactsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(UpdateArtifactDtoSchema),
  })
  @Post('update')
  async update(@Body(new ZodValidationPipe(UpdateArtifactDtoSchema)) dto: UpdateArtifactDto) {
    return await this.artifactsService.update(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(DeleteArtifactDtoSchema),
  })
  @Delete('delete')
  async delete(@Body(new ZodValidationPipe(DeleteArtifactDtoSchema)) dto: DeleteArtifactDto) {
    return await this.artifactsService.delete(dto);
  }
}
