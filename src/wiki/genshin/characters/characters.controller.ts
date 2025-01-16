import { Body, Controller, Get, Param, Post, Query, UseGuards, UsePipes } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { ApiBody, ApiExtraModels, ApiParam, ApiQuery } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { GerCharacterInfoSchema, GetCharacterInfoByNameDto, GetCharacterInfoDto, GetEntryPageListDto, GetEntryPageListSchema } from './characters.dto';
import { AdminGuard } from '@/user/admin/admin.guard';
import { ZodValidationPipe } from '@/pipe/zod_validation_pipe';
import { CharacterListEntity } from '@/entities/genshin/wiki/character/character_list.entity';
import { z } from 'zod';
import { AbstractBaseController } from '@/interfaces/abstractbasecontroller';
import { UpdateDto, DeleteDto } from '@/interfaces/basecontroller.dto';
import { WithSlugController } from '@/interfaces/withslugcontroller';
import { GetBySlugDto } from '@/types/dto/getbyslug';
import { CharacterEntity } from '@/entities/genshin/wiki/character.entity';

@Controller('wiki/genshin/characters')
export class CharactersController {
  constructor(
    private readonly wikiService: CharactersService
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
  @Get('admin/info')
  @UsePipes(ZodValidationPipe)
  async getInfo(@Query() dto: GetCharacterInfoDto) {
    const data = await this.wikiService.getInfo(dto);
    return data;
  }

  @ApiBody({
    schema: zodToOpenAPI(GetEntryPageListSchema),
  })
  @ApiExtraModels(GetEntryPageListDto)
  @UseGuards(AdminGuard)
  @UsePipes(ZodValidationPipe)
  @Post('admin/get_entry_page_list')
  async getEntryPageList(@Body() dto: GetEntryPageListDto) {
    return await this.wikiService.getEntryPageList(dto);
  }

  @Get()
  async getCharacters(): Promise<CharacterListEntity[]> {
    return await this.wikiService.getCharacters();
  }

  @ApiParam({
    name: 'name',
    schema: zodToOpenAPI(z.string()),
  })
  @ApiExtraModels(GetCharacterInfoByNameDto)
  @Get('profile/:name/info')
  @UsePipes(ZodValidationPipe)
  async getByName(@Param() dto: GetCharacterInfoByNameDto) {
    return await this.wikiService.getCharacterInfoByName(dto);
  }

  @ApiParam({
    name: 'name',
    schema: zodToOpenAPI(z.string()),
  })
  @ApiExtraModels(GetCharacterInfoByNameDto)
  @Get('profile/:name')
  @UsePipes(ZodValidationPipe)
  async getCharacterByName(@Param() dto: GetCharacterInfoByNameDto): Promise<CharacterListEntity> {
    return await this.wikiService.getCharacterByName(dto);
  }
}
