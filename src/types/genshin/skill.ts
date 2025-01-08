import { Column, PrimaryGeneratedColumn } from "typeorm";
import { GenshinEntity } from "./genshin";
import { ApiProperty } from "@nestjs/swagger";

export class SkillEntity extends GenshinEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  name: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  slug: string;

  @Column({ type: "varchar" })
  @ApiProperty()
  description: string;
}