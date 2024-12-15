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

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

@Entity("users")
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

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
  @ApiProperty()
  name: string;

  @Column({ type: "varchar", nullable: true })
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

  @ApiProperty()
  following: string[];

  @ApiProperty()
  followers: string[];

  @OneToMany(() => PostsEntity, (post) => post.user)
  posts: PostsEntity[];
}
