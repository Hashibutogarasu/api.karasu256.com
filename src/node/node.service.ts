import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ParentNodeEntity } from "@/entities/node.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateParentNodeDto, UpdateParentNodeDto } from "../node/node.dto";
import { UsersEntity } from "@/entities/user.entity";

@Injectable()
export class NodeService {
  constructor(
    @InjectRepository(ParentNodeEntity)
    private readonly nodeRepository: Repository<ParentNodeEntity>,

    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async createNode(dto: CreateParentNodeDto): Promise<ParentNodeEntity> {
    const node = new ParentNodeEntity();
    node.userId = dto.userId;
    node.name = dto.name;
    node.nodeChild = dto.nodeChild;

    return this.nodeRepository.save(node);
  }

  async updateNode(dto: UpdateParentNodeDto): Promise<UsersEntity> {
    const node = new ParentNodeEntity();
    node.userId = dto.userId;
    node.name = dto.name;
    node.nodeChild = dto.nodeChild;

    const UsersEntity = this.userRepository.findOne({ where: { id: dto.userId } });

    return await this.nodeRepository.save({ ...UsersEntity, ...dto });
  }

  async deleteNode(id: string): Promise<void> {
    await this.nodeRepository.delete(id);
  }
}
