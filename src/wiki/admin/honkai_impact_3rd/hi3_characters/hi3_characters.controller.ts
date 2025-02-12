import { HI3Characters } from '@/entities/wiki/hi3/hi3_characters.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, UpdateDto, DeleteDto, deleteSchema } from '@/utils/dto';
import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { Hi3CharactersService } from './hi3_characters.service';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { createZodDto, zodToOpenAPI } from 'nestjs-zod';
import { Authorization } from '@nestjs-cognito/auth';
import { createDtoSchema, updateDtoSchema } from './hi3_characters.dto';


@Controller('wiki/honkai_impact_3rd/admin/hi3_characters')
export class Hi3CharactersController implements IBaseAdminCaS<HI3Characters> {
  constructor(
    private readonly hi3CharactersService: Hi3CharactersService
  ) { }

  @ApiBody({
    schema: zodToOpenAPI(createDtoSchema)
  })
  @Post()
  async create(@Body() dto: CreateDto<HI3Characters>): Promise<HI3Characters> {
    return this.hi3CharactersService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateDtoSchema)
  })
  @Put()
  async update(@Body() dto: UpdateDto<HI3Characters>): Promise<void> {
    return this.hi3CharactersService.update(dto);
  }

  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.hi3CharactersService.delete(dto);
  }
}
