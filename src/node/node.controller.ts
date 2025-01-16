import { Body, Controller, Delete, Get, Post, Put, Query, Req, UseGuards } from "@nestjs/common";
import { NodeService } from "../node/node.service";
import { AbstractBaseController } from "@/interfaces/abstractbasecontroller";
import { NodeEntity } from "@/entities/node.entity";
import { UpdateDto, DeleteDto, getUpdateSchema, deleteSchema } from "@/interfaces/basecontroller.dto";
import { zodToOpenAPI } from "nestjs-zod";
import { getSchema } from "@/wiki/genshin/artifacts/artifacts.dto.schema";
import { ApiBearerAuth, ApiBody, ApiQuery } from "@nestjs/swagger";
import { NodeDto, nodeSchema } from "@/types/nodes/node";
import { UserGuard } from "@/user/user.guard";
import { z } from "zod";

@ApiBearerAuth()
@UseGuards(UserGuard)
@Controller("nodes")
export class NodeController extends AbstractBaseController<NodeEntity> {
  constructor(private readonly nodeService: NodeService) {
    super();
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(getSchema),
  })
  @Get('all')
  async getAll(@Query() dto: z.infer<typeof getSchema>, @Req() req): Promise<NodeEntity[]> {
    return await this.nodeService.getAll(req.user);
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(nodeSchema),
  })
  @Get()
  async get(@Query() dto: NodeDto, @Req() req): Promise<NodeEntity[]> {
    return await this.nodeService.get(dto, req.user);
  }

  @ApiBody({
    schema: zodToOpenAPI(nodeSchema),
  })
  @ApiBearerAuth()

  @Post()
  async create(@Req() req, @Body() dto: z.infer<typeof nodeSchema>): Promise<NodeEntity> {
    return await this.nodeService.create({
      user: req.user,
      ...dto,
    });
  }

  @ApiBody({
    schema: zodToOpenAPI(getUpdateSchema(nodeSchema)),
  })
  @ApiBearerAuth()
  @Put()
  async update(@Body() dto: UpdateDto<NodeEntity>, @Body('parent_id') parent: string, @Req() req): Promise<void> {
    return await this.nodeService.update(dto, parent, req.user);
  }

  @ApiQuery({
    name: 'query',
    schema: zodToOpenAPI(deleteSchema),
  })
  @ApiBearerAuth()
  @Delete()
  async delete(@Body() params: DeleteDto, @Req() req): Promise<void> {
    return await this.nodeService.delete(params, req.user);
  }
}
