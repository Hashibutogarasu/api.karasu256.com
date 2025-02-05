import { IBaseControllerAndService } from "@/types/basecontroller_service";
import { Body, Controller, Delete, FileTypeValidator, Get, HttpStatus, Param, ParseFilePipe, ParseFilePipeBuilder, Post, Put, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { GalleriesService } from "./galleries.service";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiQuery, getSchemaPath } from "@nestjs/swagger";
import { Authorization, PublicRoute } from "@nestjs-cognito/auth";
import { zodToOpenAPI } from "nestjs-zod";
import { Gallery } from "@/entities/common/galleries.entity";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateDto, DeleteDto, GetOneDto, GetParamsDto, UpdateDto } from "@/utils/dto";
import { createSchema, getSchema, updateSchema } from "./galleries.dto";

@Controller("galleries")
export class GalleriesController implements IBaseControllerAndService {
  constructor(
    private readonly galleriesService: GalleriesService,
  ) { }

  @ApiOperation({
    operationId: "getGalleries",
    summary: "Get galleries",
    tags: ["galleries"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post()
  async get(@Query() query: GetParamsDto<Gallery, ["character"]>): Promise<Gallery[]> {
    return this.galleriesService.get(query);
  }

  @ApiOperation({
    operationId: "getGallery",
    summary: "Get gallery",
    tags: ["galleries"],
  })
  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @PublicRoute()
  @Post("getOne")
  async getOne(@Param() query: GetOneDto<Gallery>): Promise<Gallery> {
    return this.galleriesService.getOne(query);
  }

  @ApiOperation({
    operationId: "uploadFile",
    summary: "Upload file",
    tags: ["galleries"],
  })
  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
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
  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
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
  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
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
  @Authorization({
    allowedGroups: ["admin"],
  })
  @ApiBearerAuth()
  @ApiParam({
    name: "id",
    type: "string",
  })
  @Delete(":id")
  async delete(@Param() dto: DeleteDto): Promise<void> {
    return this.galleriesService.delete(dto);
  }
}
