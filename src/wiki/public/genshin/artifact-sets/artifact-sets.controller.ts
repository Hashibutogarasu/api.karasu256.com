import { IBaseControllerAndService } from "@/types/basecontroller_service";
import { ArtifactSetsService } from "./artifact-sets.service";
import { ArtifactSets } from "@/entities/wiki/genshin/artifact-sets.entity";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, getSchemaPath } from "@nestjs/swagger";
import { Authorization, PublicRoute } from "@nestjs-cognito/auth";
import { zodToOpenAPI } from "nestjs-zod";
import { createSchema, getSchema, updateSchema } from "./artifact-sets.dto";
import { CreateDto, DeleteDto, GetOneDto, GetParamsDto, UpdateDto } from "@/utils/dto";

@Controller("wiki/genshin/artifact-sets")
export class ArtifactSetsController implements IBaseControllerAndService {
  constructor(
    private readonly service: ArtifactSetsService,
  ) { }

  @ApiOperation({
    operationId: "getArtifactSets",
    summary: "Get artifact sets",
    tags: ["genshin-impact", "artifact-sets"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("get")
  async get(@Body() query: GetParamsDto<ArtifactSets, ["characters", "artifacts", "createdAt", "updatedAt"]>): Promise<ArtifactSets[]> {
    return this.service.get(query);
  }

  @ApiOperation({
    operationId: "getArtifactSet",
    summary: "Get artifact set",
    tags: ["genshin-impact", "artifact-sets"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("getOne")
  async getOne(@Body() query: GetOneDto<ArtifactSets>): Promise<ArtifactSets> {
    return this.service.getOne(query);
  }

  @ApiOperation({
    operationId: "createArtifactSet",
    summary: "Create artifact set",
    tags: ["admin"],
  })
  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: CreateDto<ArtifactSets>): Promise<ArtifactSets> {
    return this.service.create(dto);
  }

  @ApiOperation({
    operationId: "updateArtifactSet",
    summary: "Update artifact set",
    tags: ["admin"],
  })
  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<ArtifactSets>): Promise<void> {
    return this.service.update(dto);
  }

  @ApiOperation({
    operationId: "deleteArtifactSet",
    summary: "Delete artifact set",
    tags: ["admin"],
  })
  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete(":id")
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.service.delete(dto);
  }
}
