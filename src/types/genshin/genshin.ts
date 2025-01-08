import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { TranslatableEntity } from "./translatable";

export class GenshinEntity extends TranslatableEntity {
  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}