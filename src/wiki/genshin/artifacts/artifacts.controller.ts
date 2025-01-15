import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { Artifact } from '@/entities/genshin/wiki/artifact/artifact.entity';
import { BaseController } from '@/interfaces/basecontroller';
import { DeleteDto, deleteSchema, getUpdateSchema, UpdateDto } from '@/interfaces/basecontroller.dto';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { GetDto } from './artifacts.dto.schema';
import { z } from 'zod';
import { artifactSchema } from '@/types/genshin/artifact/artifact';
import { AdminGuard } from '@/user/admin/admin.guard';

@Controller('wiki/genshin/artifacts')
export class ArtifactsController implements BaseController<Artifact> {
  constructor(
    private readonly artifactsService: ArtifactsService,
  ) { }

  @ApiParam({
    name: 'slug',
    schema: zodToOpenAPI(z.string()),
  })
  @Get(':slug')
  async get(@Param() dto: GetDto): Promise<Artifact> {
    return await this.artifactsService.get(dto);
  }

  @Get()
  async getAll(): Promise<Artifact[]> {
    return await this.artifactsService.getAll();
  }

  @ApiBody({
    schema: zodToOpenAPI(artifactSchema),
  })
  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Post()
  async create(@Body() dto: z.infer<typeof artifactSchema>) {
    return await this.artifactsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(getUpdateSchema(artifactSchema)),
  })
  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Post('update')
  async update(@Body() dto: UpdateDto<Artifact>) {
    await this.artifactsService.update(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(deleteSchema),
  })
  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Delete()
  async delete(@Body() dto: DeleteDto) {
    await this.artifactsService.delete(dto);
  }
}
