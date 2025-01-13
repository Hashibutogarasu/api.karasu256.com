import { Body, Controller, Delete, Post, UseGuards } from "@nestjs/common";
import { NodeService } from "../node/node.service";
import { CreateParentNodeDto, DeleteNodeDto, UpdateParentNodeDto } from "../node/node.dto";
import { AuthGuard } from "../auth/auth.guard";

@UseGuards(AuthGuard)
@Controller("nodes")
export class NodeController {
  constructor(private readonly nodeService: NodeService) {}
  @Post("create")
  async createNode(@Body() dto: CreateParentNodeDto) {
    return this.nodeService.createNode(dto);
  }

  @Post("update")
  async updateNode(@Body() dto: UpdateParentNodeDto) {
    return this.nodeService.updateNode(dto);
  }

  @Delete("delete")
  async deleteNode(@Body() dto: DeleteNodeDto) {
    return this.nodeService.deleteNode(dto.id);
  }
}
