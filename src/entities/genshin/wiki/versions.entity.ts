import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { VersionEntity as KVersionEntity } from "@karasu-lab/karasu-lab-sdk";
import { BaseEntity } from "@/entities/base.entity";

@Entity('versions')
export class VersionEntity extends KVersionEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  released: boolean;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => BaseEntity, (baseEntity) => baseEntity.version, { nullable: true })
  entities: BaseEntity[];
}