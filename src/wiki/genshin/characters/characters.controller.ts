import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { Character } from '@/entities/genshin/wiki/character.entity';
import { Authorization, PublicRoute } from '@nestjs-cognito/auth';
import { createSchema, getSchema, ImportCharacterDto, importCharacterSchema, ImportFromHoyoLabDto, importFromHoyoLabSchema, updateSchema } from './characters.dto';
import { CreateDto, DeleteDto, GetOneDto, GetParamsDto, UpdateDto } from '@/utils/dto';

@Controller('wiki/genshin/characters')
export class CharactersController implements IBaseControllerAndService {
  constructor(
    private readonly charactersService: CharactersService
  ) { }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Get()
  async get(@Query() params: GetParamsDto<Character, ["createdAt", "updatedAt"]>): Promise<Character[]> {
    return this.charactersService.get(params);
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Get('getOne')
  async getOne(@Param() params: GetOneDto<Character>): Promise<Character> {
    return this.charactersService.getOne(params);
  }


  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: Omit<CreateDto<Character>, "country">): Promise<Character> {
    return this.charactersService.create(dto);
  }


  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<Character>): Promise<void> {
    return this.charactersService.update(dto);
  }


  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.charactersService.delete(dto);
  }


  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(importFromHoyoLabSchema),
  })
  @Post('importFromHoyoLab')
  async importFromHoyoLab(@Query() dto: ImportFromHoyoLabDto): Promise<Character> {
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
  @Post('import')
  async import(@Body() dto: ImportCharacterDto): Promise<Character> {
    return this.charactersService.import(dto);
  }
}
