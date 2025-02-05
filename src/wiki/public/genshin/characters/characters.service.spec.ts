import { Test, TestingModule } from '@nestjs/testing';
import { CharactersService } from './characters.service';
import { GICharacter } from '@/entities/wiki/genshin/gi_character.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CharactersService', () => {
  let service: CharactersService;
  let mockRepository: Repository<GICharacter>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CharactersService,
          useFactory: () => ({
            create: jest.fn((dto) => dto),
            get: jest.fn((params) => params),
            import: jest.fn((params) => params),
          }),
        },
        {
          provide: getRepositoryToken(GICharacter),
          useClass: Repository
        }
      ],
    }).compile();

    mockRepository = module.get<Repository<GICharacter>>(getRepositoryToken(GICharacter));
    jest.spyOn(mockRepository, 'findOne').mockImplementation(jest.fn());

    service = module.get<CharactersService>(CharactersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
