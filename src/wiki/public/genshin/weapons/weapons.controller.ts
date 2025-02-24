import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { WeaponsService } from "./weapons.service";
import { Weapon } from "@/entities/wiki/genshin/weapons.entity";
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";
import { getSchema } from "./weapons.dto";
import { GetOneDto, GetParamsDto } from "@/utils/dto";
import { AutoOperationName } from "@/utils/operation";

@Controller("wiki/genshin/weapons")
@ApiTags("weapons")
export class WeaponsController implements IBasePublicCaS<Weapon> {
  constructor(
    private readonly weaponsService: WeaponsService,
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
  async getAll(@Query() dto: any): Promise<Weapon[]> {
    return this.weaponsService.getAll(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("get")
  async get(@Body() query: GetParamsDto<Weapon, ["characters", "createdAt", "updatedAt"]>): Promise<Weapon[]> {
    return this.weaponsService.get(query);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("getOne")
  async getOne(@Body() query: GetOneDto<Weapon>): Promise<Weapon> {
    return this.weaponsService.getOne(query);
  }
}
