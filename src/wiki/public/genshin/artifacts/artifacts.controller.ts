import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Body, Controller, Post } from "@nestjs/common";
import { ArtifactsService } from "./artifacts.service";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Artifacts } from "@/entities/wiki/genshin/artifacts.entity";
import { zodToOpenAPI } from "nestjs-zod";
import { getSchema } from "./artifacts.dto";
import { GetParamsDto, GetOneDto } from "@/utils/dto";

@ApiTags("genshin-impact")
@Controller("wiki/genshin/artifacts")
export class ArtifactsController implements IBasePublicCaS<Artifacts> {
  constructor(
    private readonly artifactsService: ArtifactsService
  ) { }

  @ApiOperation({
    operationId: "getArtifacts",
    summary: "Get artifacts",
    tags: ["artifacts"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("get")
  async get(@Body() query: GetParamsDto<Artifacts, ["createdAt", "updatedAt"]>): Promise<Artifacts[]> {
    return this.artifactsService.get(query);
  }

  @ApiOperation({
    operationId: "getArtifact",
    summary: "Get artifact",
    tags: ["artifacts"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("getOne")
  async getOne(@Body() query: GetOneDto<Artifacts>): Promise<Artifacts> {
    return this.artifactsService.getOne(query);
  }
}
