export class CreateCountryDto {
  name: string;
  slug: string;
  description: string;
};

export class UpdateCountryDto {
  id: string;
  name?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
};

export class FindCountryDto {
  slug: string;
};

export class DeleteCountryDto {
  id: string;
};
