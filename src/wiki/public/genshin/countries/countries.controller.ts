import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Body, Controller, Post } from "@nestjs/common";
import { zodToOpenAPI } from "nestjs-zod";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CountriesService } from "./countries.service";
import { getSchema } from "./contries.dto";
import { GetParamsDto } from "@/utils/dto";
import { Country } from "@/entities/wiki/genshin/countries.entity";
import { AutoOperationName } from "@/utils/operation";

@Controller("wiki/genshin/regions")
@AutoOperationName()
@ApiTags("regions")
export class CountriesController implements IBasePublicCaS<Country> {
  constructor(
    private readonly service: CountriesService,
  ) { }

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
