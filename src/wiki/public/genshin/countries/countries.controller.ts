import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { zodToOpenAPI } from "nestjs-zod";
import { ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import { CountriesService } from "./countries.service";
import { getSchema } from "./contries.dto";
import { GetParamsDto } from "@/utils/dto";
import { Country } from "@/entities/wiki/genshin/countries.entity";
import { AutoOperationName } from "@/utils/operation";

@Controller("wiki/genshin/regions")
@ApiTags("regions")
export class CountriesController implements IBasePublicCaS<Country> {
  constructor(
    private readonly service: CountriesService,
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
  async getAll(@Query() dto: any): Promise<Country[]> {
    return this.service.getAll(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("get")
  async get(@Body() query: GetParamsDto<Country, ["createdAt", "updatedAt"]>): Promise<Country[]> {
    return this.service.get(query);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("getOne")
  async getOne(@Body() query: GetParamsDto<Country, ["characters", "createdAt", "updatedAt"]>): Promise<Country> {
    return this.service.getOne(query);
  }
}
