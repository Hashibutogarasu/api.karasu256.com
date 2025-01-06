import { ApiProperty } from "@nestjs/swagger";

export class CreateCountryDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  description: string;
}

export class UpdateCountryDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  slug?: string;

  @ApiProperty()
  description?: string;
}

export class FindCountryDto {
  @ApiProperty()
  slug: string;
}

export class DeleteCountryDto {
  @ApiProperty()
  id: string;
}