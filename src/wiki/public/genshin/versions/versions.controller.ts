import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { VersionsService } from "./versions.service";
import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { VersionsEntity } from "@/entities/wiki/genshin/versions.entity";
import { CreateDto, DeleteDto, GetParamsDto, UpdateDto } from "@/utils/dto";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";
import { createSchema, getSchema, updateSchema } from "./versions.dto";
import { Authorization, PublicRoute } from "@nestjs-cognito/auth";

@Controller("wiki/genshin/versions")
export class VersionsController implements IBasePublicCaS<VersionsEntity> {
  constructor(
    private readonly versionsService: VersionsService
  ) { }

  @ApiOperation({
    operationId: "getVersions",
    summary: "Get versions",
    tags: ["genshin-impact"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("get")
  async get(@Body() query: GetParamsDto<VersionsEntity, ["createdAt", "updatedAt"]>): Promise<VersionsEntity[]> {
    return this.versionsService.get(query);
  }

  @ApiOperation({
    operationId: "getVersion",
    summary: "Get version",
    tags: ["genshin-impact"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("getOne")
  async getOne(@Body() query: GetParamsDto<VersionsEntity, ["weapons", "artifacts", "characters", "countries", "artifact_sets", "createdAt", "updatedAt"]>): Promise<VersionsEntity> {
    return this.versionsService.getOne(query);
  }

  @ApiOperation({
    operationId: "createVersion",
    summary: "Create version",
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
  async create(@Body() dto: CreateDto<VersionsEntity>): Promise<VersionsEntity> {
    return this.versionsService.create(dto);
  }

  @ApiOperation({
    operationId: "updateVersion",
    summary: "Update version",
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
  async update(@Body() dto: UpdateDto<VersionsEntity>): Promise<void> {
    return this.versionsService.update(dto);
  }

  @ApiOperation({
    operationId: "deleteVersion",
    summary: "Delete version",
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
    return this.versionsService.delete(dto);
  }
}
