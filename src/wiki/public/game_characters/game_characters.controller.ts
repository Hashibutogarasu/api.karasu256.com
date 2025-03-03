import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GameCharactersService } from './game_characters.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { characterSchema, CreateCharacterDto, createCharacterSchema, UpdateCharacterDto, updateCharacterSchema } from '@/wiki/wiki.dto';
import { DeleteDto } from '@/utils/dto';
import { z } from 'zod';

@Controller('game-characters')
export class GameCharactersController {
  constructor(
    private readonly gameCharactersService: GameCharactersService
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(createCharacterSchema)
  })
  @ApiOperation({ summary: 'Create a new game character' })
  @ApiResponse({
    status: 201,
    description: 'Create a new game character',
    schema: zodToOpenAPI(characterSchema),
  })
  @Post()
  async create(@Body() dto: CreateCharacterDto) {
    return await this.gameCharactersService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateCharacterSchema)
  })
  @ApiOperation({ summary: 'Update a game character' })
  @Put()
  async update(@Body() dto: UpdateCharacterDto) {
    return await this.gameCharactersService.update(dto);
  }

  @ApiParam({
    name: "id",
    type: "string",
  })
  @ApiOperation({ summary: 'Delete a game character' })
  @Delete(":id")
  async delete(@Body() dto: DeleteDto) {
    return await this.gameCharactersService.delete(dto);
  }

  @ApiOperation({ summary: 'List all game characters' })
  @ApiResponse({
    status: 200,
    description: 'List all game characters',
    schema: zodToOpenAPI(z.array(characterSchema)),
  })
  @Get()
  async findAll() {
    return await this.gameCharactersService.findAll();
  }

  @Get(":id")
  @ApiParam({
    name: "id",
    type: "string",
  })
  @ApiOperation({ summary: 'Get a game character by id' })
  @ApiResponse({
    status: 200,
    description: 'Get a game character by id',
    schema: zodToOpenAPI(characterSchema),
  })
  async findOne(@Param('id') id: string) {
    return await this.gameCharactersService.findOne(id);
  }
}
