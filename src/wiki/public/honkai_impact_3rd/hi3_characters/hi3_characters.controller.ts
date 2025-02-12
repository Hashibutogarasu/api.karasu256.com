import { HI3Characters } from '@/entities/wiki/hi3/hi3_characters.entity';
import { IBasePublicCaS } from '@/types/ibase_public_cas';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Hi3CharactersService } from './hi3_characters.service';
import { GetParamsDto } from '@/utils/dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('wiki/public/honkai_impact_3rd/hi3_characters')
@ApiTags("hi3_characters")
export class Hi3CharactersController implements IBasePublicCaS<HI3Characters> {
  constructor(
    private readonly hi3CharactersService: Hi3CharactersService
  ) {}

  @Get()
  async getAll(): Promise<HI3Characters[]> {
    return await this.hi3CharactersService.getAll();
  }

  @Post('get')
  async get(@Body() query: GetParamsDto<HI3Characters, ["skills", "stigmatas", "weapons", "createdAt", "updatedAt"]>): Promise<HI3Characters[]> {
    return await this.hi3CharactersService.get(query);
  }

  @Post('getOne')
  async getOne(@Body() query: GetParamsDto<HI3Characters, ["skills", "stigmatas", "weapons", "createdAt", "updatedAt"]>): Promise<HI3Characters> {
    return await this.hi3CharactersService.getOne(query);
  }
}
