import { IBasePublicCaS } from "@/types/ibase_public_cas";
import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { GalleriesService } from "./galleries.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { zodToOpenAPI } from "nestjs-zod";
import { Gallery } from "@/entities/common/galleries.entity";
import { GetOneDto, GetParamsDto } from "@/utils/dto";
import { getSchema } from "./galleries.dto";

@Controller("wiki/galleries")
@ApiTags("galleries")
export class GalleriesController implements IBasePublicCaS<Gallery> {
  constructor(
    private readonly galleriesService: GalleriesService,
  ) { }

  @Get()
  async getAll(): Promise<Gallery[]> {
    return this.galleriesService.get({});
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post()
  async get(@Query() query: GetParamsDto<Gallery, ["character"]>): Promise<Gallery[]> {
    return this.galleriesService.get(query);
  }

  @ApiBody({
    schema: zodToOpenAPI(getSchema),
  })
  @Post("getOne")
  async getOne(@Param() query: GetOneDto<Gallery>): Promise<Gallery> {
    return this.galleriesService.getOne(query);
  }
}
