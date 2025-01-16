import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { Artifact } from '@/entities/genshin/wiki/artifact/artifact.entity';
import { DeleteDto, deleteSchema, getUpdateSchema, UpdateDto } from '@/interfaces/basecontroller.dto';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { GetDto, getSchema } from './artifacts.dto.schema';
import { z } from 'zod';
import { artifactSchema } from '@/types/genshin/artifact/artifact';
import { AbstractBaseController } from '@/interfaces/abstractbasecontroller';
import { AdminGuard } from '@/user/admin/admin.guard';

@Controller('wiki/genshin/artifacts')
export class ArtifactsController extends AbstractBaseController<Artifact> {
  constructor(
    private readonly artifactsService: ArtifactsService,
  ) {
    super();
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getSchema),
  })
  @Get()
  override async get(@Query() dto: GetDto): Promise<Artifact> {
    return await this.artifactsService.get(dto);
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getSchema),
  })
  @Get('all')
  override async getAll(dto: z.infer<typeof getSchema>): Promise<Artifact[]> {
    return await this.artifactsService.getAll();
  }

  @ApiBody({
    schema: zodToOpenAPI(artifactSchema),
  })
  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Post()
  override async create(@Req() req, @Body() dto: z.infer<typeof artifactSchema>) {
    return await this.artifactsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(getUpdateSchema(artifactSchema)),
  })
  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Put()
  override async update(@Body() dto: UpdateDto<Artifact>) {
    await this.artifactsService.update(dto);
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(deleteSchema),
  })
  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Delete()
  override async delete(@Query() params: DeleteDto) {
    await this.artifactsService.delete(params);
  }
}
