import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { CreateDto, DeleteDto, UpdateDto } from '@/utils/dto';
import { Authorization } from '@nestjs-cognito/auth';
import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema, updateSchema } from './artifact-sets.dto';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { ArtifactSetsService } from './artifact-sets.service';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller("wiki/genshin/admin/artifact-sets")
export class ArtifactSetsController implements IBaseAdminCaS<ArtifactSets> {
  constructor(
    private readonly service: ArtifactSetsService,
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: CreateDto<ArtifactSets>): Promise<ArtifactSets> {
    return this.service.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<ArtifactSets>): Promise<void> {
    return this.service.update(dto);
  }

  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete(":id")
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.service.delete(dto);
  }
}
