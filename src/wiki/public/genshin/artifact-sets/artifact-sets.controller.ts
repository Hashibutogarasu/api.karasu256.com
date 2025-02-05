import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { ArtifactSetsService } from "./artifact-sets.service";
import { ArtifactSets } from "@/entities/wiki/genshin/artifact-sets.entity";
import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";
import { getSchema } from "./artifact-sets.dto";
import { GetOneDto, GetParamsDto } from "@/utils/dto";

@ApiTags("genshin-impact")
@Controller("wiki/genshin/artifact-sets")
export class ArtifactSetsController implements IBasePublicCaS<ArtifactSets> {
  constructor(
    private readonly service: ArtifactSetsService,
  ) { }

  @ApiOperation({
    operationId: "getArtifactSets",
    summary: "Get artifact sets",
    tags: ["artifact-sets"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("get")
  async get(@Body() query: GetParamsDto<ArtifactSets, ["characters", "artifacts", "createdAt", "updatedAt"]>): Promise<ArtifactSets[]> {
    return this.service.get(query);
  }

  @ApiOperation({
    operationId: "getArtifactSet",
    summary: "Get artifact set",
    tags: ["artifact-sets"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("getOne")
  async getOne(@Body() query: GetOneDto<ArtifactSets>): Promise<ArtifactSets> {
    return this.service.getOne(query);
  }
}
