import { ArtifactSet } from '@/entities/genshin/wiki/artifact/artifact_set.entity';
import { BaseController } from '@/interfaces/basecontroller';
import { UpdateDto, DeleteDto, getUpdateSchema, deleteSchema } from '@/interfaces/basecontroller.dto';
import { artifactSetSchema } from '@/types/genshin/artifact/artifact_set';
import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { z } from 'zod';
import { SetsService } from './sets.service';
import { AdminGuard } from '@/user/admin/admin.guard';

@Controller('wiki/genshin/artifacts/sets')
export class SetsController implements BaseController<ArtifactSet> {
  constructor(
    private readonly setsService: SetsService
  ) { }

  async getAll(): Promise<ArtifactSet[]> {
    return await this.setsService.getAll();
  }

  @Get()
  async get(dto: z.infer<typeof artifactSetSchema>): Promise<ArtifactSet> {
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
