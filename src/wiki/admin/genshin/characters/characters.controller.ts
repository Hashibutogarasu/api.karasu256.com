import { Authorization } from '@nestjs-cognito/auth';
import { BadRequestException, Body, Controller, Delete, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { createSchema, ImportCharacterDto, importCharacterSchema, ImportFromHoyoLabDto, importFromHoyoLabSchema, updateSchema } from './characters.dto';
import { CreateDto, DeleteDto, UpdateDto } from '@/utils/dto';
import { GICharacter } from '@/entities/wiki/genshin/gi_character.entity';
import { CharactersService } from './characters.service';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller("wiki/genshin/admin/characters")
export class CharactersController implements IBaseAdminCaS<GICharacter> {
  constructor(
    private readonly charactersService: CharactersService
  ) { }

  @ApiOperation({
    operationId: "createCharacter",
    summary: "Create character",
  })
  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: CreateDto<GICharacter>): Promise<GICharacter> {
    return this.charactersService.create(dto);
  }

  @ApiOperation({
    operationId: "updateCharacter",
    summary: "Update character",
  })
  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<GICharacter>): Promise<void> {
    return this.charactersService.update(dto);
  }

  @ApiOperation({
    operationId: "deleteCharacter",
    summary: "Delete character",
  })

  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete(":id")
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.charactersService.delete(dto);
  }

  @ApiQuery({
    name: "query",
    schema: zodToOpenAPI(importFromHoyoLabSchema),
  })
  @Post("importFromHoyoLab")
  async importFromHoyoLab(@Query() dto: ImportFromHoyoLabDto): Promise<GICharacter> {
    const data = await fetch(`https://sg-wiki-api-static.hoyolab.com/hoyowiki/genshin/wapi/entry_page?entry_page_id=${dto.entry_page_id}`, {
      "credentials": "omit",
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "ja,en-US;q=0.7,en;q=0.3",
        "x-rpc-language": "ja-jp",
        "x-rpc-wiki_app": "genshin",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site"
      },
      "referrer": "https://wiki.hoyolab.com/",
      "method": "GET",
      "mode": "cors"
    });

    const json = await data.json()

    if (!json.data || !json.data.page) {
      throw new NotFoundException("page not found");
    }

    const parsed = importCharacterSchema.safeParse(json.data.page);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    return this.charactersService.import({
      ...parsed.data,
    });
  }

  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(importCharacterSchema),
  })
  @Post("import")
  async import(@Body() dto: ImportCharacterDto): Promise<GICharacter> {
    return this.charactersService.import(dto);
  }
}
