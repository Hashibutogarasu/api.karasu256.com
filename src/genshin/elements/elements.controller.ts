import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ElementsService } from './elements.service';
import { CreateElementDto, DeleteElementDto, FindElementDto, UpdateElementDto } from './elements.dto';
import { AdminGuard } from '@/user/admin/admin.guard';
import { ApiExtraModels } from '@nestjs/swagger';

@Controller('genshin/elements')
@ApiExtraModels(FindElementDto, CreateElementDto, UpdateElementDto, DeleteElementDto)
export class ElementsController {
  constructor(
    private readonly elementsService: ElementsService,
  ) { }

  @Get()
  async find(@Query() dto: FindElementDto) {
    return this.elementsService.find(dto);
  }

  @UseGuards(AdminGuard)
  @Post('create')
  async create(@Body() dto: CreateElementDto) {
    return await this.elementsService.create(dto);
  }

  @UseGuards(AdminGuard)
  @Post('update')
  async update(@Body() dto: UpdateElementDto) {
    return await this.elementsService.update(dto);
  }

  @UseGuards(AdminGuard)
  @Post('delete')
  async delete(@Body() element: DeleteElementDto) {
    return await this.elementsService.delete(element);
  }
}
