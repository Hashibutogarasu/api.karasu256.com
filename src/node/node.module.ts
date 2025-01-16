import { Module } from "@nestjs/common";
import { NodeController } from "../node/node.controller";
import { NodeService } from "../node/node.service";
import { NodeEntity } from "@/entities/node.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "@/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, NodeEntity])],
  controllers: [NodeController],
  providers: [NodeService],
})
export class NodeModule {}
