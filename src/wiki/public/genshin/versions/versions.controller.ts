import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { VersionsService } from "./versions.service";
import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { VersionsEntity } from "@/entities/wiki/genshin/versions.entity";
import { GetParamsDto } from "@/utils/dto";
import { ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";
import { getSchema } from "./versions.dto";
import { AutoOperationName } from "@/utils/operation";

@Controller("wiki/genshin/versions")
@ApiTags("versions")
export class VersionsController implements IBasePublicCaS<VersionsEntity> {
  constructor(
    private readonly versionsService: VersionsService
  ) { }

  @ApiQuery({
    name: "take",
    required: false,
    type: Number,
  })
  @ApiQuery({
    name: "skip",
    required: false,
    type: Number,
  })
  @Get()
  async getAll(@Query() dto: any) {
    return this.versionsService.getAll(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("get")
  async get(@Body() query: GetParamsDto<VersionsEntity, ["createdAt", "updatedAt"]>): Promise<VersionsEntity[]> {
    return this.versionsService.get(query);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("getOne")
  async getOne(@Body() query: GetParamsDto<VersionsEntity, ["weapons", "artifacts", "characters", "countries", "artifact_sets", "createdAt", "updatedAt"]>): Promise<VersionsEntity> {
    return this.versionsService.getOne(query);
  }
}
