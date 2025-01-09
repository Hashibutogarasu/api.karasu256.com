export class CreateElementDto {
  name?: string;
  slug?: string;
}

export class UpdateElementDto {
  id: string;
  name?: string | undefined;
  slug?: string | undefined;
}

export class DeleteElementDto {
  id: string;
}

export class GetElementDto {
  id: string;
}

export class GetElementsDto {
  page?: number = 1;
  limit?: number = 10;
  name?: string | undefined;
}

export class FindElementDto {
  id?: string | undefined;
  slug?: string | undefined;
  name?: string | undefined;
}
