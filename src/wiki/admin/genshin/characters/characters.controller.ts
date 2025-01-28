import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { CreateCharacterDto, createCharacterSchema, DeleteCharacterDto, deleteCharacterSchema, GetCharacterDto, GetCharacterParamsDto, getCharacterParamsSchema, getCharacterSchema, ImportCharacterDto, importCharacterSchema, ImportFromHoyoLabDto, importFromHoyoLabSchema, UpdateCharacterDto, updateCharacterSchema } from './characters.dto';
import { zodToOpenAPI } from 'nestjs-zod';
import { Character } from '@/entities/genshin/wiki/character.entity';
import { Authorization } from '@nestjs-cognito/auth';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('wiki/genshin/admin/characters')
export class CharactersController implements IBaseControllerAndService {
  constructor(
    private readonly charactersService: CharactersService
  ) { }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getCharacterSchema),
  })
  @Get()
  async get(@Query() params: GetCharacterDto): Promise<Character[]> {
    return this.charactersService.get(params);
  }

  @ApiParam({
    name: 'param',
    schema: zodToOpenAPI(getCharacterParamsSchema),
  })
  @Get(':id')
  async getOne(@Param() params: GetCharacterParamsDto): Promise<Character> {
    return this.charactersService.getOne(params);
  }

  @ApiBody({
    schema: zodToOpenAPI(createCharacterSchema),
  })
  @Post()
  async create(@Body() dto: CreateCharacterDto): Promise<Character> {
    return this.charactersService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateCharacterSchema),
  })
  @Put()
  async update(@Body() dto: UpdateCharacterDto): Promise<void> {
    return this.charactersService.update(dto);
  }

  @ApiParam({
    name: 'param',
    schema: zodToOpenAPI(deleteCharacterSchema),
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteCharacterDto): Promise<void> {
    return this.charactersService.delete(dto);
  }

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

  @ApiBody({
    schema: zodToOpenAPI(importCharacterSchema),
  })
  @Post('import')
  async import(@Body() dto: ImportCharacterDto): Promise<Character> {
    return this.charactersService.import(dto);
  }
}
