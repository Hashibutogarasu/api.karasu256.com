import { HttpException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { NodeEntity } from "@/entities/node.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "@/entities/user.entity";
import { AbstractBaseService } from "@/interfaces/abstractbaseservice";
import { UpdateDto, DeleteDto } from "@/interfaces/basecontroller.dto";
import { z } from "zod";
import { NodeDto, nodeSchema } from "@/types/nodes/node";
import { GetBySlugDto } from "@/types/dto/getbyslug";
import { RelationMap } from "typeorm-relations";

@Injectable()
export class NodeService extends AbstractBaseService<NodeEntity> {
  getBySlug(dto: GetBySlugDto): Promise<NodeEntity> {
    throw new Error("Method not implemented.");
  }
  constructor(
    @InjectRepository(NodeEntity)
    private readonly nodeRepository: Repository<NodeEntity>,
  ) {
    super();
  }

  async getAll(user: UsersEntity): Promise<NodeEntity[]> {
    return await this.nodeRepository.find({
      where: {
        user: {
          id: user.id
        }
      },
    });
  }

  async get(dto: NodeDto, authenicateduser: UsersEntity): Promise<NodeEntity[]> {
    const relation = new RelationMap<NodeEntity>({
      parent: true,
      children: true,
    });

    const { user, parent, children, ...ref } = dto;
    return await this.nodeRepository.find({
      where: {
        ...ref,
        user: {
          id: authenicateduser.id
        }
      },
      relations: relation.toFindOptionsRelations()
    });
  }

  async create(dto: z.infer<typeof nodeSchema>): Promise<NodeEntity> {
    if (dto.parentId) {
      const parent = await this.nodeRepository.findOne({
        where: {
          id: dto.parentId
        }
      });
      if (!parent) {
        throw new HttpException("Parent node not found", 404);
      }

      dto.parent = parent;

      const node = this.nodeRepository.create(dto);
      return await this.nodeRepository.save(node);
    }
    else {
      const node = this.nodeRepository.create(dto);
      return await this.nodeRepository.save(node);
    }
  }

  async update(dto: UpdateDto<NodeEntity>, parent_id: string, user: UsersEntity): Promise<void> {
    const relation = new RelationMap<NodeEntity>({
      user: true,
      parent: {
        user: true,
        parent: true,
      },
      children: true,
    });

    const node = await this.nodeRepository.findOne({
      where: {
        id: dto.id
      },
      relations: relation.toFindOptionsRelations()
    });

    const parent = await this.nodeRepository.findOneBy({
      id: parent_id
    });

    if (!parent) {
      throw new HttpException("Parent node not found", 404);
    }

    if (node.id === parent.id) {
      throw new HttpException("Node and parent cannot be the same", 400);
    }

    if (node.user.id != user.id) {
      throw new HttpException("You are not authorized to update this node", 403);
    }

    dto.entity.parent = parent;

    await this.nodeRepository.update(dto.id, dto.entity);

    const saved = await this.nodeRepository.findOne({
      where: {
        id: dto.id
      },
      relations: relation.toFindOptionsRelations()
    });

    parent.children = [saved, ...parent.children || []];

    await this.nodeRepository.save(parent);
  }

  async delete(params: DeleteDto, user: UsersEntity): Promise<void> {
    const node = await this.nodeRepository.findOne({
      where: {
        id: params.id,
      },
      relations: {
        user: true
      }
    });
    if (node.user.id !== user.id) {
      throw new HttpException("You are not authorized to delete this node", 403);
    }

    await this.nodeRepository.delete(params.id);
  }
}
