import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { ApiBearerAuth, ApiBody, ApiQuery } from '@nestjs/swagger';
import { CreateCharacterDto, createCharacterSchema, DeleteCharacterDto, deleteCharacterSchema, GetCharacterDto, getCharacterSchema, UpdateCharacterDto, updateCharacterSchema } from './characters.dto';
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
  async get(@Query() dto: GetCharacterDto): Promise<Character[]> {
    return this.charactersService.get(dto);
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

  @ApiBody({
    schema: zodToOpenAPI(deleteCharacterSchema),
  })
  @Delete()
  async delete(@Body() dto: DeleteCharacterDto): Promise<void> {
    return this.charactersService.delete(dto);
  }
}
