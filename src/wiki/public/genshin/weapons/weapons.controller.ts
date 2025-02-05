import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Body, Controller, Post } from "@nestjs/common";
import { WeaponsService } from "./weapons.service";
import { Weapon } from "@/entities/wiki/genshin/weapons.entity";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";
import { getSchema } from "./weapons.dto";
import { GetOneDto, GetParamsDto } from "@/utils/dto";
import { AutoOperationName } from "@/utils/operation";

@Controller("wiki/genshin/weapons")
@AutoOperationName()
@ApiTags("weapons")
export class WeaponsController implements IBasePublicCaS<Weapon> {
  constructor(
    private readonly weaponsService: WeaponsService,
  ) { }

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
