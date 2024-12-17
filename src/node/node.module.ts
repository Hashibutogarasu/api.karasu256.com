import { Module } from "@nestjs/common";
import { NodeController } from "./node.controller";
import { NodeService } from "./node.service";
import { NodeChildEntity, ParentNodeEntity } from "./node.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "../user/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, ParentNodeEntity, NodeChildEntity])],
  controllers: [NodeController],
  providers: [NodeService],
})
export class NodeModule {}
