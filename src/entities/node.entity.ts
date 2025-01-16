import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UsersEntity } from "@/entities/user.entity";

@Entity("parent_nodes")
export class NodeEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @JoinTable()
  @ManyToMany(() => NodeEntity, (nodeChild) => nodeChild.children, { nullable: true })
  children?: NodeEntity[] | undefined;

  @ManyToOne(() => NodeEntity, (nodeParent) => nodeParent.id, { nullable: true, cascade: true, onDelete: "CASCADE" })
  parent?: NodeEntity | undefined;

  @ManyToOne(() => UsersEntity, (user) => user.id)
  user: UsersEntity;
}
