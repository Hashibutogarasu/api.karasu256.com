import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GalleriesService } from './galleries.service';
import { CreateGalleryDto, createGallerySchema, DeleteGalleryDto, deleteGallerySchema, GetGalleryDto, GetGalleryParamsDto, getGallerySchema, UpdateGalleryDto, updateGallerySchema } from './galleries.dto';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { Authorization, PublicRoute } from '@nestjs-cognito/auth';
import { zodToOpenAPI } from 'nestjs-zod';

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
  async get(@Query() params: GetGalleryDto): Promise<any[]> {
    return this.galleriesService.get(params);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @PublicRoute()
  @Get(':id')
  async getOne(@Param() params: GetGalleryParamsDto): Promise<any> {
    return this.galleriesService.getOne(params);
  }

  @ApiBody({
    schema: zodToOpenAPI(createGallerySchema),
  })
  @Post()
  async create(@Body() dto: CreateGalleryDto): Promise<any> {
    return this.galleriesService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateGallerySchema),
  })
  @Post()
  async update(@Body() dto: UpdateGalleryDto): Promise<void> {
    return this.galleriesService.update(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(deleteGallerySchema),
  })
  @Post()
  async delete(@Body() dto: DeleteGalleryDto): Promise<void> {
    return this.galleriesService.delete(dto);
  }
}
