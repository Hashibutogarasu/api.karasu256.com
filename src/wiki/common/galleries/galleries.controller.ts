import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Body, Controller, Delete, FileTypeValidator, Get, HttpStatus, Param, ParseFilePipe, ParseFilePipeBuilder, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { GalleriesService } from './galleries.service';
import { CreateGalleryDto, createGallerySchema, GetGalleryDto, GetGalleryParamsDto, getGallerySchema, UpdateGalleryDto, updateGallerySchema } from './galleries.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiParam, ApiQuery, getSchemaPath } from '@nestjs/swagger';
import { Authorization, PublicRoute } from '@nestjs-cognito/auth';
import { zodToOpenAPI } from 'nestjs-zod';
import { Gallery } from '@/entities/common/galleries.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { DeleteDto, GetParamsDto } from '@karasu-lab/karasu-lab-sdk';


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
  async getOne(@Param() params: GetParamsDto): Promise<Gallery> {
    return this.galleriesService.getOne(params);
  }

  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        outletId: { type: 'integer' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<{ url: string }> {
    return this.galleriesService.uploadFile(file);
  }

  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(createGallerySchema),
  })
  @Post()
  async create(@Body() dto: CreateGalleryDto): Promise<Gallery> {
    return this.galleriesService.create(dto);
  }

  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiBody({
    schema: zodToOpenAPI(updateGallerySchema),
  })
  @Put()
  async update(@Body() dto: UpdateGalleryDto): Promise<void> {
    return this.galleriesService.update(dto);
  }

  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @Delete(':id')
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.galleriesService.delete(dto);
  }
}
