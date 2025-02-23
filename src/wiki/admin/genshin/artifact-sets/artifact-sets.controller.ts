import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';
import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { ArtifactSetsService } from './artifact-sets.service';
import { Authorization } from '@nestjs-cognito/auth';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema, updateSchema } from './artifact-sets.dto';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('wiki/genshin/admin/artifact-sets')
export class ArtifactSetsController implements IBaseAdminCaS<ArtifactSets> {
  constructor(
    private readonly artifactSetsService: ArtifactSetsService
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(createSchema)
  })
  @Post()
  async create(@Body() dto: CreateDto<ArtifactSets>): Promise<ArtifactSets> {
    return await this.artifactSetsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateSchema)
  })
  @Put()
  async update(@Body() dto: UpdateDto<ArtifactSets>): Promise<void> {
    return await this.artifactSetsService.update(dto);
  }

  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete("id")
  async delete(@Body() dto: DeleteDto): Promise<void> {
    return await this.artifactSetsService.delete(dto);
  }
}
