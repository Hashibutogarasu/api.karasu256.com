import { ApiProperty } from "@nestjs/swagger";
import { NodeChildEntity } from "./node.entity";
import { IsOptional } from "class-validator";

export class CreateParentNodeDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  nodeChild: NodeChildEntity[];
}

export class UpdateParentNodeDto {
  @IsOptional()
  @ApiProperty()
  userId: string | null;

  @IsOptional()
  @ApiProperty()
  name: string | null;

  @ApiProperty()
  nodeChild: NodeChildEntity[];
}

export class DeleteNodeDto {
  @ApiProperty()
  id: string;
}
