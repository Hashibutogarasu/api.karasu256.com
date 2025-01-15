import { ArtifactSet } from '@/entities/genshin/wiki/artifact/artifact_set.entity';
import { UpdateDto, DeleteDto, getUpdateSchema, deleteSchema } from '@/interfaces/basecontroller.dto';
import { artifactSetSchema } from '@/types/genshin/artifact/artifact_set';
import { Body, Controller, Delete, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiQuery } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { z } from 'zod';
import { SetsService } from './sets.service';
import { AdminGuard } from '@/user/admin/admin.guard';
import { AbstractBaseController } from '@/interfaces/abstractbasecontroller';

@Controller('wiki/genshin/artifacts/sets')
export class SetsController extends AbstractBaseController<ArtifactSet> {
  constructor(
    private readonly setsService: SetsService
  ) {
    super();
  }

  @Get('all')
  async getAll(): Promise<ArtifactSet[]> {
    return await this.setsService.getAll();
  }

  @ApiQuery({
    name: 'slug',
    schema: zodToOpenAPI(z.string()),
  })
  @Get()
  async get(@Query() dto: z.infer<typeof artifactSetSchema>): Promise<ArtifactSet> {
    return await this.setsService.get(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(artifactSetSchema),
  })
  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Post('create')
  async create(@Body() dto: z.infer<typeof artifactSetSchema>): Promise<void> {
    return await this.setsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(getUpdateSchema(artifactSetSchema)),
  })
  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Post()
  async update(@Body() dto: UpdateDto<ArtifactSet>): Promise<void> {
    return await this.setsService.update(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(getUpdateSchema(deleteSchema)),
  })
  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Delete()
  async delete(@Body() params: DeleteDto): Promise<void> {
    return await this.setsService.delete(params);
  }
}
