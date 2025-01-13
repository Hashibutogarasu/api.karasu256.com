import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { z } from "zod";

@Entity("display_field")
export class DisplayField {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}

export const DisplayFieldSchema = z.object({
  id: z.string(),
});