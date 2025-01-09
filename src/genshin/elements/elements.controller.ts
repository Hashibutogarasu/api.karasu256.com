import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ElementsService } from './elements.service';
import { CreateElementDto, CreateElementDtoSchema, DeleteElementDto, DeleteElementDtoSchema, FindElementDto, FindElementDtoSchema, UpdateElementDto, UpdateElementDtoSchema } from './elements.dto';
import { AdminGuard } from '@/user/admin/admin.guard';
import { ApiBody, ApiExtraModels, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { ZodValidationPipe } from '@/pipe/zod_validation_pipe';

@Controller('genshin/elements')
@ApiExtraModels(FindElementDto, CreateElementDto, UpdateElementDto, DeleteElementDto)
export class ElementsController {
  constructor(
    private readonly elementsService: ElementsService,
  ) { }

  @ApiQuery({
    required: false,
    name: 'queryParams',
    explode: true,
    type: 'object',
    schema: {
      $ref: getSchemaPath(FindElementDto),
    },
  })
  @Get()
  async find(@Query(new ZodValidationPipe(FindElementDtoSchema)) dto: FindElementDto) {
    return this.elementsService.find(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(CreateElementDtoSchema),
  })
  @UseGuards(AdminGuard)
  @Post('create')
  async create(@Body(new ZodValidationPipe(CreateElementDtoSchema)) dto: CreateElementDto) {
    return await this.elementsService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(UpdateElementDtoSchema),
  })
  @UseGuards(AdminGuard)
  @Post('update')
  async update(@Body(new ZodValidationPipe(UpdateElementDtoSchema)) dto: UpdateElementDto) {
    return await this.elementsService.update(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(DeleteElementDtoSchema),
  })
  @UseGuards(AdminGuard)
  @Delete('delete')
  async delete(@Body(new ZodValidationPipe(DeleteElementDtoSchema)) element: DeleteElementDto) {
    return await this.elementsService.delete(element);
  }
}
