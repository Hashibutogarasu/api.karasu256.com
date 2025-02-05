import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Body, Controller, Post } from "@nestjs/common";
import { CharactersService } from "./characters.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";
import { GICharacter } from "@/entities/wiki/genshin/gi_character.entity";
import { getSchema } from "./characters.dto";
import { GetOneDto, GetParamsDto } from "@/utils/dto";
import { AutoOperationName } from "@/utils/operation";

@Controller("wiki/genshin/characters")
@ApiTags("characters")
export class CharactersController implements IBasePublicCaS<GICharacter> {
  constructor(
    private readonly charactersService: CharactersService
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("get")
  async get(@Body() query: GetParamsDto<GICharacter, ["createdAt", "updatedAt"]>): Promise<GICharacter[]> {
    return this.charactersService.get(query);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("getOne")
  async getOne(@Body() query: GetOneDto<GICharacter>): Promise<GICharacter> {
    return this.charactersService.getOne(query);
  }
}
