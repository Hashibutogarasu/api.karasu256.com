import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Body, Controller, Post } from "@nestjs/common";
import { ArtifactsService } from "./artifacts.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { Artifacts } from "@/entities/wiki/genshin/artifacts.entity";
import { zodToOpenAPI } from "nestjs-zod";
import { getSchema } from "./artifacts.dto";
import { GetParamsDto, GetOneDto } from "@/utils/dto";
import { AutoOperationName } from "@/utils/operation";

@Controller("wiki/genshin/artifacts")
@ApiTags("artifacts")
export class ArtifactsController implements IBasePublicCaS<Artifacts> {
  constructor(
    private readonly artifactsService: ArtifactsService
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("get")
  async get(@Body() query: GetParamsDto<Artifacts, ["createdAt", "updatedAt"]>): Promise<Artifacts[]> {
    return this.artifactsService.get(query);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("getOne")
  async getOne(@Body() query: GetOneDto<Artifacts>): Promise<Artifacts> {
    return this.artifactsService.getOne(query);
  }
}
