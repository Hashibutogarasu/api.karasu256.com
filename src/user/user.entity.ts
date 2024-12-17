import { ApiProperty } from "@nestjs/swagger";
import { PostsEntity } from "../post/post.entity";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ParentNodeEntity } from "../node/node.entity";
import { IsOptional } from "class-validator";

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

@Entity("users")
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar", default: null, name: "supabase_id" })
  @ApiProperty()
  supaseId: string | undefined;

  @Column({ type: "enum", enum: Role, default: Role.USER })
  @ApiProperty()
  role: Role = Role.USER;

  @Column({ type: "varchar", name: "display_name" })
  @ApiProperty()
  displayName: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  email: string;

  @Column("bool", { default: false, name: "email_is_public" })
  @ApiProperty()
  emailIsPublic: boolean;

  @Column({ type: "varchar" })
  @IsOptional()
  @ApiProperty()
  name: string | null;

  @Column({ type: "varchar", nullable: true })
  @IsOptional()
  @ApiProperty()
  bio: string | null;

  @Column({ type: "varchar", name: "avatar_url", nullable: true })
  @ApiProperty()
  avatarUrl: string | null;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;

  @Column({ type: "varchar", array: true, default: [] })
  @ApiProperty()
  following: string[];

  @Column({ type: "varchar", array: true, default: [] })
  @ApiProperty()
  followers: string[];

  @OneToMany(() => PostsEntity, (post) => post.user)
  posts: PostsEntity[];

  @OneToMany(() => ParentNodeEntity, (parentNode) => parentNode.user)
  parentNode: ParentNodeEntity[];
}
