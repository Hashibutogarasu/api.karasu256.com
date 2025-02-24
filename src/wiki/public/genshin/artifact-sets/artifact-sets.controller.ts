import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { ArtifactSetsService } from "./artifact-sets.service";
import { ArtifactSets } from "@/entities/wiki/genshin/artifact-sets.entity";
import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";
import { getSchema } from "./artifact-sets.dto";
import { GetOneDto, GetParamsDto } from "@/utils/dto";
import { AutoOperationName } from "@/utils/operation";

@Controller("wiki/genshin/artifact-sets")
@ApiTags("artifact-sets")
export class ArtifactSetsController implements IBasePublicCaS<ArtifactSets> {
  constructor(
    private readonly service: ArtifactSetsService,
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
  async getAll(@Query() dto: any): Promise<ArtifactSets[]> {
    return this.service.getAll(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("get")
  async get(@Body() query: GetParamsDto<ArtifactSets, ["characters", "artifacts", "createdAt", "updatedAt"]>): Promise<ArtifactSets[]> {
    return this.service.get(query);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("getOne")
  async getOne(@Body() query: GetOneDto<ArtifactSets>): Promise<ArtifactSets> {
    return this.service.getOne(query);
  }
}
