import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column } from "typeorm";

export class TranslatableEntity extends BaseEntity {
  @Column({ type: "varchar", nullable: true })
  @ApiProperty()
  translationKey: string | null;
}