import { Test, TestingModule } from '@nestjs/testing';
import { CountriesService } from './countries.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Country } from '@/entities/genshin/wiki/countries.entity';

describe('CountriesService', () => {
  let service: CountriesService;
  let mockRepository: Repository<Country>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CountriesService,
          useFactory: () => ({
            create: jest.fn((dto) => dto),
            get: jest.fn((params) => params),
          }),
        },
        {
          provide: getRepositoryToken(Country),
          useClass: Repository
        }
      ],
    }).compile();

    mockRepository = module.get<Repository<Country>>(getRepositoryToken(Country));
    jest.spyOn(mockRepository, 'findOne').mockImplementation(jest.fn());

    service = module.get<CountriesService>(CountriesService);
  });

  it('create a country', async () => {
    const country = await service.create({
      name: 'Test Country',
      description: 'Test Description',
      sumbnail_url: 'https://example.com/sumbnail.png',
      version: '1.0',
    });

    const { id, ...rest } = country;

    expect(await service.get({ ...rest })).toEqual(rest);
  });
});
