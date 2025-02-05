import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Controller, Param, Post, Query } from "@nestjs/common";
import { GalleriesService } from "./galleries.service";
import { ApiBody, ApiOperation } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";
import { Gallery } from "@/entities/common/galleries.entity";
import { GetOneDto, GetParamsDto } from "@/utils/dto";
import { getSchema } from "./galleries.dto";

@Controller("galleries")
export class GalleriesController implements IBasePublicCaS<Gallery> {
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
  @Post("getOne")
  async getOne(@Param() query: GetOneDto<Gallery>): Promise<Gallery> {
    return this.galleriesService.getOne(query);
  }
}
