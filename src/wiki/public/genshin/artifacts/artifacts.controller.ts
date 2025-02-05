import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ArtifactsService } from "./artifacts.service";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, getSchemaPath } from "@nestjs/swagger";
import { Authorization, PublicRoute } from "@nestjs-cognito/auth";
import { Artifacts } from "@/entities/wiki/genshin/artifacts.entity";
import { zodToOpenAPI } from "nestjs-zod";
import { createSchema, getSchema, updateSchema } from "./artifacts.dto";
import { CreateDto, DeleteDto, GetParamsDto, GetOneDto, UpdateDto } from "@/utils/dto";

@Controller("wiki/genshin/artifacts")
export class ArtifactsController implements IBasePublicCaS<Artifacts> {
  constructor(
    private readonly artifactsService: ArtifactsService
  ) { }

  @ApiOperation({
    operationId: "getArtifacts",
    summary: "Get artifacts",
    tags: ["genshin-impact", "artifacts"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("get")
  async get(@Body() query: GetParamsDto<Artifacts, ["createdAt", "updatedAt"]>): Promise<Artifacts[]> {
    return this.artifactsService.get(query);
  }

  @ApiOperation({
    operationId: "getArtifact",
    summary: "Get artifact",
    tags: ["genshin-impact", "artifacts"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("getOne")
  async getOne(@Body() query: GetOneDto<Artifacts>): Promise<Artifacts> {
    return this.artifactsService.getOne(query);
  }

  @ApiOperation({
    operationId: "createArtifact",
    summary: "Create artifact",
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
  async create(dto: CreateDto<Artifacts>): Promise<Artifacts> {
    return this.artifactsService.create(dto);
  }

  @ApiOperation({
    operationId: "updateArtifact",
    summary: "Update artifact",
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
  async update(@Body() dto: UpdateDto<Artifacts>): Promise<void> {
    return this.artifactsService.update(dto);
  }

  @ApiOperation({
    operationId: "deleteArtifact",
    summary: "Delete artifact",
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
    return this.artifactsService.delete(dto);
  }
}
