import { Body, Controller, Get, Param, Post, Query, UseGuards, UsePipes } from '@nestjs/common';
import { WikiService } from './wiki.service';
import { zodToOpenAPI, ZodValidationPipe } from 'nestjs-zod';
import { ApiBody, ApiExtraModels, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { GerCharacterInfoSchema, GetCharacterInfoByNameDto, GetCharacterInfoByNameSchema, GetCharacterInfoDto, GetEntryPageListDto, GetEntryPageListSchema, SaveCharacterDto, SaveCharacterSchema } from './wiki.dto';
import { z } from 'zod';
import { AdminGuard } from '@/user/admin/admin.guard';

@Controller('genshin/wiki')
export class WikiController {
  constructor(
    private readonly wikiService: WikiService
  ) { }

  @ApiQuery({
    required: false,
    name: 'queryParams',
    explode: true,
    type: 'object',
    schema: zodToOpenAPI(GerCharacterInfoSchema),
  })
  @ApiExtraModels(GetCharacterInfoDto)
  @UseGuards(AdminGuard)
  @Get('info')
  @UsePipes(ZodValidationPipe)
  async getInfo(@Query() dto: GetCharacterInfoDto) {
    const data = await this.wikiService.getInfo(dto);
    return data;
  }

  @ApiQuery({
    required: false,
    name: 'queryParams',
    explode: true,
    type: 'object',
    schema: zodToOpenAPI(SaveCharacterSchema),
  })
  @ApiExtraModels(SaveCharacterDto)
  @UseGuards(AdminGuard)
  @Post('save')
  @UsePipes(ZodValidationPipe)
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
  @ApiExtraModels(GetCharacterInfoByNameDto)
  @Get(':name/info')
  @UsePipes(ZodValidationPipe)
  async getByName(@Param() dto: GetCharacterInfoByNameDto) {
    return await this.wikiService.getCharacterInfoByName(dto);
  }

  @ApiParam({
    name: 'name',
    schema: zodToOpenAPI(z.string()),
  })
  @ApiExtraModels(GetCharacterInfoByNameDto)
  @Get(':name')
  @UsePipes(ZodValidationPipe)
  async get(@Param() dto: GetCharacterInfoByNameDto) {
    return await this.wikiService.getCharacterByName(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(GetEntryPageListSchema),
  })
  @ApiExtraModels(GetEntryPageListDto)
  @UseGuards(AdminGuard)
  @UsePipes(ZodValidationPipe)
  @Post('get_entry_page_list')
  async getEntryPageList(@Body() dto: GetEntryPageListDto) {
    return await this.wikiService.getEntryPageList(dto);
  }
}
