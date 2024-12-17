import { ApiProperty } from "@nestjs/swagger";
import { UsersEntity } from "../user/user.entity";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("posts")
export class PostsEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar", nullable: true })
  @ApiProperty()
  title: string | null;

  @Column({ type: "text", nullable: true })
  @ApiProperty()
  content: string | null;

  @Column({ type: "varchar" })
  @ApiProperty()
  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @ApiProperty()
  userId: string;

  @ManyToOne(() => UsersEntity, (user) => user.posts)
  user: UsersEntity;
}
