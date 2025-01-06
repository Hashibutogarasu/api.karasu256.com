import { GenshinCharacterEntity } from '@/entities/genshin/character.entity';
import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { CreateCharacterDto, DeleteCharacterDto, FindCharacterDto, UpdateCharacterDto } from './characters.dto';
import { CharactersService } from './characters.service';
import { AdminGuard } from '@/user/admin/admin.guard';

@Controller('genshin/characters')
export class CharactersController {
  constructor(
    private readonly characterService: CharactersService,
  ) { }

  @Get()
  async find(@Query() dto: FindCharacterDto) {
    return this.characterService.find(dto);
  }

  @Get('profile/:slug')
  async findBySlug(@Param('slug') slug: string) {
    return this.characterService.findBySlug(slug);
  }

  @UseGuards(AdminGuard)
  @Post('create')
  async create(@Body() character: CreateCharacterDto) {
    return await this.characterService.create(character);
  }

  @UseGuards(AdminGuard)
  @Post('update')
  async update(@Body() character: UpdateCharacterDto) {
    return await this.characterService.update(character);
  }

  @UseGuards(AdminGuard)
  @Delete('delete')
  async delete(@Body() character: DeleteCharacterDto) {
    return await this.characterService.delete(character);
  }
}
