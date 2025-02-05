import { Body, Controller, Post } from "@nestjs/common";
import { VersionsService } from "./versions.service";
import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { VersionsEntity } from "@/entities/wiki/genshin/versions.entity";
import { GetParamsDto } from "@/utils/dto";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";
import { getSchema } from "./versions.dto";

@ApiTags("genshin-impact")
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
  @Post("getOne")
  async getOne(@Body() query: GetParamsDto<VersionsEntity, ["weapons", "artifacts", "characters", "countries", "artifact_sets", "createdAt", "updatedAt"]>): Promise<VersionsEntity> {
    return this.versionsService.getOne(query);
  }
}
