import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { WeaponsService } from "./weapons.service";
import { Weapon } from "@/entities/wiki/genshin/weapons.entity";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam } from "@nestjs/swagger";
import { Authorization } from "@nestjs-cognito/auth";
import { zodToOpenAPI } from "nestjs-zod";
import { CreateDto, DeleteDto, UpdateDto } from "@/utils/dto";
import { IBaseAdminCaS } from "@/types/ibase_admin_cas";
import { createSchema, updateSchema } from "./weapons.dto";

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
  @Controller("wiki/genshin/admin/weapons")
export class WeaponsController implements IBaseAdminCaS<Weapon> {
  constructor(
    private readonly weaponsService: WeaponsService,
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: CreateDto<Weapon>): Promise<Weapon> {
    return this.weaponsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<Weapon>): Promise<void> {
    return this.weaponsService.update(dto);
  }

  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete(":id")
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.weaponsService.delete(dto);
  }
}
