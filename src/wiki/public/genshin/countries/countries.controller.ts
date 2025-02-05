import { IBaseControllerAndService } from "@/types/basecontroller_service";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { zodToOpenAPI } from "nestjs-zod";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, getSchemaPath } from "@nestjs/swagger";
import { CountriesService } from "./countries.service";
import { Authorization, PublicRoute } from "@nestjs-cognito/auth";
import { createSchema, getSchema, updateSchema } from "./contries.dto";
import { CreateDto, DeleteDto, GetParamsDto, UpdateDto } from "@/utils/dto";
import { Country } from "@/entities/wiki/genshin/countries.entity";

@Controller("wiki/genshin/regions")
export class CountriesController implements IBaseControllerAndService {
  constructor(
    private readonly service: CountriesService,
  ) { }

  @ApiOperation({
    operationId: "getRegions",
    summary: "Get regions",
    tags: ["genshin-impact", "regions"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("get")
  async get(@Body() query: GetParamsDto<Country, ["createdAt", "updatedAt"]>): Promise<Country[]> {
    return this.service.get(query);
  }

  @ApiOperation({
    operationId: "getRegion",
    summary: "Get region",
    tags: ["genshin-impact", "regions"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("getOne")
  async getOne(@Body() query: GetParamsDto<Country, ["characters", "createdAt", "updatedAt"]>): Promise<Country> {
    return this.service.getOne(query);
  }

  @ApiOperation({
    operationId: "createRegion",
    summary: "Create region",
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
  async create(@Body() dto: CreateDto<Country>): Promise<Country> {
    return this.service.create(dto);
  }

  @ApiOperation({
    operationId: "updateRegion",
    summary: "Update region",
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
  async update(@Body() dto: UpdateDto<Country>): Promise<void> {
    return this.service.update(dto);
  }

  @ApiOperation({
    operationId: "deleteRegion",
    summary: "Delete region",
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
