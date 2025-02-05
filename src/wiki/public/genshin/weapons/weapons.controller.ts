import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { WeaponsService } from "./weapons.service";
import { Weapon } from "@/entities/wiki/genshin/weapons.entity";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, getSchemaPath } from "@nestjs/swagger";
import { Authorization, PublicRoute } from "@nestjs-cognito/auth";
import { zodToOpenAPI } from "nestjs-zod";
import { createSchema, getSchema, updateSchema } from "./weapons.dto";
import { CreateDto, DeleteDto, GetOneDto, GetParamsDto, UpdateDto } from "@/utils/dto";

@Controller("wiki/genshin/weapons")
export class WeaponsController implements IBasePublicCaS<Weapon> {
  constructor(
    private readonly weaponsService: WeaponsService,
  ) { }

  @ApiOperation({
    operationId: "getWeapons",
    summary: "Get weapons",
    tags: ["genshin-impact", "weapons"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("get")
  async get(@Body() query: GetParamsDto<Weapon, ["characters", "createdAt", "updatedAt"]>): Promise<Weapon[]> {
    return this.weaponsService.get(query);
  }

  @ApiOperation({
    operationId: "getWeapon",
    summary: "Get weapon",
    tags: ["genshin-impact", "weapons"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("getOne")
  async getOne(@Body() query: GetOneDto<Weapon>): Promise<Weapon> {
    return this.weaponsService.getOne(query);
  }

  @ApiOperation({
    operationId: "createWeapon",
    summary: "Create weapon",
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
  async create(@Body() dto: CreateDto<Weapon>): Promise<Weapon> {
    return this.weaponsService.create(dto);
  }

  @ApiOperation({
    operationId: "updateWeapon",
    summary: "Update weapon",
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
  async update(@Body() dto: UpdateDto<Weapon>): Promise<void> {
    return this.weaponsService.update(dto);
  }

  @ApiOperation({
    operationId: "deleteWeapon",
    summary: "Delete weapon",
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
    return this.weaponsService.delete(dto);
  }
}
