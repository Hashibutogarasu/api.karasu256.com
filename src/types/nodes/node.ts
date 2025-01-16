import { NodeEntity } from "@/entities/node.entity";
import { UsersEntity } from "@/entities/user.entity";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const nodeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  parent: z.instanceof(NodeEntity).optional(),
  children: z.array(z.instanceof(NodeEntity)).default([]).optional(),
  parentId: z.string().optional(),
  user: z.instanceof(UsersEntity)
});

export class NodeDto extends createZodDto(nodeSchema) { }