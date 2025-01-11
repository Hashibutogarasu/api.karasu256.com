import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { WikiService } from './wiki.service';
import { zodToOpenAPI, ZodValidationPipe } from 'nestjs-zod';
import { ApiBody, ApiExtraModels, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { GetCharactersDto, GetCharactersSchema } from '@/types/genshin/hoyowiki/data';
import { GerCharacterInfoSchema, GetCharacterInfoByNameDto, GetCharacterInfoByNameSchema, GetCharacterInfoDto, SaveCharacterDto } from './wiki.dto';
import { AdminGuard } from '@/user/admin/admin.guard';
import { z } from 'zod';

@Controller('genshin/wiki')
export class WikiController {
  constructor(
    private readonly wikiService: WikiService
  ) { }

  @UseGuards(AdminGuard)
  @ApiBody({
    schema: zodToOpenAPI(GetCharactersSchema),
  })
  @Post()
  async getData(@Body(new ZodValidationPipe()) dto: GetCharactersDto) {
    return await this.wikiService.getData(dto);
  }

  @UseGuards(AdminGuard)
  @Get('info')
  async getInfo(@Query() dto: GetCharacterInfoDto) {
    return await this.wikiService.getInfo(dto);
  }

  @ApiQuery({
    required: false,
    name: 'queryParams',
    explode: true,
    type: 'object',
    schema: {
      $ref: getSchemaPath(SaveCharacterDto),
    },
  })
  @ApiExtraModels(SaveCharacterDto)
  @UseGuards(AdminGuard)
  @Post('save')
  async save(@Query() dto: SaveCharacterDto) {
    return await this.wikiService.saveAll(dto);
  }

  @Get()
  async getAll() {
    return await this.wikiService.getCharacters();
  }

  @ApiParam({
    name: 'name',
    schema: zodToOpenAPI(z.string()),
  })
  @Get(':name/info')
  async getByName(@Param() dto: GetCharacterInfoByNameDto) {
    return await this.wikiService.getCharacterInfoByName(dto);
  }

  @ApiParam({
    name: 'name',
    schema: zodToOpenAPI(z.string()),
  })
  @Get(':name')
  async get(@Param() dto: GetCharacterInfoByNameDto) {
    return await this.wikiService.getCharacterByName(dto);
  }
}
