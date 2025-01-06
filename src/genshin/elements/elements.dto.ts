import { ApiProperty } from "@nestjs/swagger";

export class CreateElementDto {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  slug?: string;
}

export class UpdateElementDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name?: string | undefined;

  @ApiProperty()
  slug?: string | undefined;
}

export class DeleteElementDto {
  @ApiProperty()
  id: string;
}

export class GetElementDto {
  @ApiProperty()
  id: string;
}

export class GetElementsDto {
  @ApiProperty()
  page?: number = 1;

  @ApiProperty()
  limit?: number = 10;

  @ApiProperty()
  name?: string | undefined;
}

export class FindElementDto {
  @ApiProperty()
  id?: string | undefined;

  @ApiProperty()
  slug?: string | undefined;

  @ApiProperty()
  name?: string | undefined;
}