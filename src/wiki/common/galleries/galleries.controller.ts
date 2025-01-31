import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { GalleriesService } from './galleries.service';
import { CreateGalleryDto, createGallerySchema, DeleteGalleryDto, deleteGallerySchema, GetGalleryDto, GetGalleryParamsDto, getGallerySchema, UpdateGalleryDto, updateGallerySchema } from './galleries.dto';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { Authorization, PublicRoute } from '@nestjs-cognito/auth';
import { zodToOpenAPI } from 'nestjs-zod';
import { Gallery } from '@/entities/genshin/wiki/galleries.entity';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
@Controller('galleries')
export class GalleriesController implements IBaseControllerAndService {
  constructor(
    private readonly galleriesService: GalleriesService,
  ) { }

  @ApiQuery({
    name: 'query',
    type: getSchemaPath(GetGalleryDto),
    schema: zodToOpenAPI(getGallerySchema),
  })
  @PublicRoute()
  @Get()
  async get(@Query() params: GetGalleryDto): Promise<Gallery[]> {
    return this.galleriesService.get(params);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @PublicRoute()
  @Get(':id')
  async getOne(@Param() params: GetGalleryParamsDto): Promise<Gallery> {
    return this.galleriesService.getOne(params);
  }

  @ApiBody({
    schema: zodToOpenAPI(createGallerySchema),
  })
  @Post()
  async create(@Body() dto: CreateGalleryDto): Promise<Gallery> {
    return this.galleriesService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateGallerySchema),
  })
  @Put()
  async update(@Body() dto: UpdateGalleryDto): Promise<void> {
    return this.galleriesService.update(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(deleteGallerySchema),
  })
  @Delete()
  async delete(@Body() dto: DeleteGalleryDto): Promise<void> {
    return this.galleriesService.delete(dto);
  }
}
