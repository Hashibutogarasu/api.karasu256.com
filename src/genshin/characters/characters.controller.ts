import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { CreateCharacterDto, CreateCharacterDtoSchema, DeleteCharacterDto, DeleteCharacterDtoSchema, FindCharacterDto, FindCharacterDtoSchema, UpdateCharacterDto, UpdateCharacterDtoSchema } from './characters.dto';
import { CharactersService } from './characters.service';
import { AdminGuard } from '@/user/admin/admin.guard';
import { ApiBody, ApiExtraModels, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { ZodValidationPipe } from '@/pipe/zod_validation_pipe';
import { Type } from 'class-transformer';

@Controller('genshin/characters')
export class CharactersController {
  constructor(
    private readonly characterService: CharactersService,
  ) { }

  @ApiQuery({
    required: false,
    name: 'queryParams',
    explode: true,
    type: 'object',
    schema: {
      $ref: getSchemaPath(FindCharacterDto),
    },
  })
  @ApiExtraModels(FindCharacterDto)
  @Get()
  async find(@Query(new ZodValidationPipe(FindCharacterDtoSchema)) dto: FindCharacterDto) {
    return this.characterService.find(dto);
  }

  @ApiParam({
    name: 'slug',
    type: 'string',
  })
  @Get('profile/:slug')
  async findBySlug(@Param() slug: string) {
    return this.characterService.findBySlug(slug);
  }

  @ApiBody({
    schema: zodToOpenAPI(CreateCharacterDtoSchema),
  })
  @UseGuards(AdminGuard)
  @Post('create')
  async create(@Body(new ZodValidationPipe(CreateCharacterDtoSchema)) character: CreateCharacterDto) {
    return await this.characterService.create(character);
  }

  @ApiBody({
    schema: zodToOpenAPI(UpdateCharacterDtoSchema),
  })
  @UseGuards(AdminGuard)
  @Post('update')
  async update(@Body(new ZodValidationPipe(UpdateCharacterDtoSchema)) character: UpdateCharacterDto) {
    return await this.characterService.update(character);
  }

  @ApiBody({
    schema: zodToOpenAPI(DeleteCharacterDtoSchema),
  })
  @UseGuards(AdminGuard)
  @Delete('delete')
  async delete(@Body(new ZodValidationPipe(DeleteCharacterDtoSchema)) character: DeleteCharacterDto) {
    return await this.characterService.delete(character);
  }
}
