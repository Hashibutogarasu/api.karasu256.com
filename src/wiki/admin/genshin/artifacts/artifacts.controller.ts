import { Artifacts } from '@/entities/wiki/genshin/artifacts.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, UpdateDto, DeleteDto } from '@/utils/dto';
import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, getSchemaPath } from "@nestjs/swagger";
import { Authorization, PublicRoute } from "@nestjs-cognito/auth";
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema, updateSchema } from './artifacts.dto';
import { ArtifactsService } from './artifacts.service';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller("wiki/genshin/admin/artifacts")
export class ArtifactsController implements IBaseAdminCaS<Artifacts> {
  constructor(
    private readonly artifactsService: ArtifactsService
  ) { }

  @ApiOperation({
    operationId: "createArtifact",
    summary: "Create artifact",
    tags: ["admin"],
  })
  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(dto: CreateDto<Artifacts>): Promise<Artifacts> {
    return this.artifactsService.create(dto);
  }

  @ApiOperation({
    operationId: "updateArtifact",
    summary: "Update artifact",
    tags: ["admin"],
  })
  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<Artifacts>): Promise<void> {
    return this.artifactsService.update(dto);
  }

  @ApiOperation({
    operationId: "deleteArtifact",
    summary: "Delete artifact",
    tags: ["admin"],
  })
  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete(":id")
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.artifactsService.delete(dto);
  }
}
