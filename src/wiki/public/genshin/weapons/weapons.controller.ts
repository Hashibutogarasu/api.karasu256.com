import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Body, Controller, Post } from "@nestjs/common";
import { WeaponsService } from "./weapons.service";
import { Weapon } from "@/entities/wiki/genshin/weapons.entity";
import { ApiBody, ApiOperation } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";
import { getSchema } from "./weapons.dto";
import { GetOneDto, GetParamsDto } from "@/utils/dto";

@Controller("wiki/genshin/weapons")
export class WeaponsController implements IBasePublicCaS<Weapon> {
  constructor(
    private readonly weaponsService: WeaponsService,
  ) { }

  @ApiOperation({
    operationId: "getWeapons",
    summary: "Get weapons",
    tags: ["genshin-impact", "weapons"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("get")
  async get(@Body() query: GetParamsDto<Weapon, ["characters", "createdAt", "updatedAt"]>): Promise<Weapon[]> {
    return this.weaponsService.get(query);
  }

  @ApiOperation({
    operationId: "getWeapon",
    summary: "Get weapon",
    tags: ["genshin-impact", "weapons"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("getOne")
  async getOne(@Body() query: GetOneDto<Weapon>): Promise<Weapon> {
    return this.weaponsService.getOne(query);
  }
}
