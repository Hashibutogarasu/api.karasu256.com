import { ApiProperty } from "@nestjs/swagger";
import { UsersEntity } from "@/entities/user.entity";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
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

  @Column({ type: "uuid", name: "user_id" })
  @ApiProperty()
  userId: string;

  @OneToOne(() => UsersEntity, (user) => user.posts)
  user: UsersEntity;
}
