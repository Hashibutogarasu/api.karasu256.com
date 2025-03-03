import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GameCharactersService } from './game_characters.service';
import { ApiBearerAuth, ApiBody, ApiExtraModels, ApiOperation, ApiParam, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { CreateCharacterDto, createCharacterSchema, UpdateCharacterDto, updateCharacterSchema } from '@/wiki/wiki.dto';
import { DeleteDto } from '@/utils/dto';
import { GameCharacter } from '@/entities/wiki/game_character';
import { Authorization, PublicRoute } from '@nestjs-cognito/auth';

@ApiExtraModels(GameCharacter)
@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('wiki/game-characters')
export class GameCharactersController {
  constructor(
    private readonly gameCharactersService: GameCharactersService
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(createCharacterSchema)
  })
  @ApiOperation({ summary: 'Create a new game character' })
  @Post()
  async create(@Body() dto: CreateCharacterDto): Promise<GameCharacter> {
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
  @PublicRoute()
  @Get()
  async findAll(): Promise<GameCharacter[]> {
    return await this.gameCharactersService.findAll();
  }

  @ApiParam({
    name: "id",
    type: "string",
  })
  @ApiOperation({ summary: 'Get a game character by id' })
  @PublicRoute()
  @Get(":id")
  async findOne(@Param('id') id: string): Promise<GameCharacter> {
    return await this.gameCharactersService.findOne(id);
  }
}
