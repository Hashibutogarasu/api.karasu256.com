import { Test, TestingModule } from '@nestjs/testing';
import { CharactersService } from './characters.service';
import { Character } from '@/entities/genshin/wiki/character.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CharactersService', () => {
  let service: CharactersService;
  let mockRepository: Repository<Character>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CharactersService,
          useFactory: () => ({
            create: jest.fn((dto) => dto),
            get: jest.fn((params) => params),
          }),
        },
        {
          provide: getRepositoryToken(Character),
          useClass: Repository
        }
      ],
    }).compile();

    mockRepository = module.get<Repository<Character>>(getRepositoryToken(Character));
    jest.spyOn(mockRepository, 'findOne').mockImplementation(jest.fn());

    service = module.get<CharactersService>(CharactersService);
  });

  it('create a character', async () => {
    const character = await service.create({
      name: 'Test Character',
      description: 'Test Description',
      element: 'Test Element',
      icon_url: 'https://example.com/icon.png',
      country: 'Test Country',
      rarity: 5,
      version: '1.0',
    });

    const { id, country, ...rest } = character;

    expect(await service.get({
      ...rest,
      country: country.name,
    })).toEqual(rest);
  });
});
