import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Body, Controller, Post } from "@nestjs/common";
import { zodToOpenAPI } from "nestjs-zod";
import { ApiBody, ApiOperation } from "@nestjs/swagger";
import { CountriesService } from "./countries.service";
import { getSchema } from "./contries.dto";
import { GetParamsDto } from "@/utils/dto";
import { Country } from "@/entities/wiki/genshin/countries.entity";

@Controller("wiki/genshin/regions")
export class CountriesController implements IBasePublicCaS<Country> {
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
  @Post("getOne")
  async getOne(@Body() query: GetParamsDto<Country, ["characters", "createdAt", "updatedAt"]>): Promise<Country> {
    return this.service.getOne(query);
  }
}
