import { GenshinEntity } from "@/types/genshin/genshin";
import { BaseEntity, Column } from "typeorm";

export class ArtifactStat extends GenshinEntity {
  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  slug: string;

  @Column({ type: "varchar" })
  description: string;
}