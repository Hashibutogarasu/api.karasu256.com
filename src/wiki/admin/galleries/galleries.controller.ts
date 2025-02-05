import { Gallery } from '@/entities/common/galleries.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, DeleteDto, UpdateDto } from '@/utils/dto';
import { Authorization } from '@nestjs-cognito/auth';
import { Body, Controller, Delete, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiParam } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { GalleriesService } from './galleries.service';
import { createSchema, updateSchema } from './galleries.dto';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
  @Controller('galleries/admin')
export class GalleriesController implements IBaseAdminCaS<Gallery> {
  constructor(
    private readonly galleriesService: GalleriesService,
  ) { }

  @ApiOperation({
    operationId: "uploadFile",
    summary: "Upload file",
    tags: ["galleries"],
  })
  @Post("upload")
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        comment: { type: "string" },
        outletId: { type: "integer" },
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<{ url: string }> {
    return this.galleriesService.uploadFile(file);
  }

  @ApiOperation({
    operationId: "createGallery",
    summary: "Create gallery",
    tags: ["galleries", "admin"],
  })
  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: CreateDto<Gallery>): Promise<Gallery> {
    return this.galleriesService.create(dto);
  }

  @ApiOperation({
    operationId: "updateGallery",
    summary: "Update gallery",
    tags: ["galleries", "admin"],
  })
  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<Gallery>): Promise<void> {
    return this.galleriesService.update(dto);
  }

  @ApiOperation({
    operationId: "deleteGallery",
    summary: "Delete gallery",
    tags: ["galleries", "admin"],
  })
  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete(":id")
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.galleriesService.delete(dto);
  }
}
