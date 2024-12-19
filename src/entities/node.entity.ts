import { ApiProperty } from "@nestjs/swagger";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UsersEntity } from "@/entities/user.entity";

@Entity("parent_nodes")
export class ParentNodeEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => NodeChildEntity, (nodeChild) => nodeChild.parentId)
  nodeChild: NodeChildEntity[];

  @ManyToOne(() => UsersEntity, (user) => user.id)
  user: UsersEntity;
}

@Entity("node_children")
export class NodeChildEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "text" })
  @ApiProperty()
  content: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  parentId: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ManyToOne(() => ParentNodeEntity, (parentNode) => parentNode.id)
  parentNode: ParentNodeEntity;
}
