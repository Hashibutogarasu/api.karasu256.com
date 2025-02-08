import { Gallery } from '@/entities/common/galleries.entity';
import { IBaseAdminCaS } from '@/types/ibase_admin_cas';
import { CreateDto, DeleteDto, UpdateDto } from '@/utils/dto';
import { Authorization } from '@nestjs-cognito/auth';
import { Body, Controller, Delete, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { GalleriesService } from './galleries.service';
import { createSchema, updateSchema } from './galleries.dto';

@Authorization({
  allowedGroups: ["admin"],
})
@ApiBearerAuth()
  @ApiTags("galleries")
  @Controller('wiki/admin/galleries')
export class GalleriesController implements IBaseAdminCaS<Gallery> {
  constructor(
    private readonly galleriesService: GalleriesService,
  ) { }

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

  @ApiBody({
    schema: zodToOpenAPI(createSchema),
  })
  @Post()
  async create(@Body() dto: CreateDto<Gallery>): Promise<Gallery> {
    return this.galleriesService.create(dto);
  }

  @ApiBody({
    schema: zodToOpenAPI(updateSchema),
  })
  @Put()
  async update(@Body() dto: UpdateDto<Gallery>): Promise<void> {
    return this.galleriesService.update(dto);
  }

  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete(":id")
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.galleriesService.delete(dto);
  }
}
