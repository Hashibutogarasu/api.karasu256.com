import { ArtifactSet } from '@/entities/genshin/wiki/artifact/artifact_set.entity';
import { UpdateDto, DeleteDto, getUpdateSchema, deleteSchema } from '@/interfaces/basecontroller.dto';
import { artifactSetSchema } from '@/types/genshin/artifact/artifact_set';
import { Body, Controller, Delete, Get, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiQuery } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { z } from 'zod';
import { SetsService } from './sets.service';
import { AdminGuard } from '@/user/admin/admin.guard';
import { AbstractBaseController } from '@/interfaces/abstractbasecontroller';
import { getSchema } from '../artifacts.dto.schema';

@Controller('wiki/genshin/artifacts/sets')
export class SetsController extends AbstractBaseController<ArtifactSet> {
  constructor(
    private readonly setsService: SetsService
  ) {
    super();
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(artifactSetSchema),
  })
  @Get()
  async get(@Query() dto: z.infer<typeof artifactSetSchema>): Promise<ArtifactSet> {
    return await this.setsService.get(dto);
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getSchema),
  })
  @Get('all')
  async getAll(@Query() dto: z.infer<typeof getSchema>): Promise<ArtifactSet[]> {
    return await this.setsService.getAll();
  }

  @ApiBody({
    schema: zodToOpenAPI(artifactSetSchema),
  })
  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Post()
  async create(@Req() req, @Body() dto: z.infer<typeof artifactSetSchema>): Promise<void> {
    return await this.setsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(getUpdateSchema(artifactSetSchema)),
  })
  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Put()
  async update(@Body() dto: UpdateDto<ArtifactSet>): Promise<void> {
    return await this.setsService.update(dto);
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(deleteSchema),
  })
  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Delete()
  async delete(@Query() params: DeleteDto): Promise<void> {
    return await this.setsService.delete(params);
  }
}
