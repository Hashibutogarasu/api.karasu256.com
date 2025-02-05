import { Test, TestingModule } from '@nestjs/testing';
import { WeaponsService } from './weapons.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Weapon } from '@/entities/wiki/genshin/weapons.entity';
import { Repository } from 'typeorm';

describe('WeaponsService', () => {
  let service: WeaponsService;
  let mockRepository: Repository<Weapon>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: WeaponsService,
          useFactory: () => ({
            create: jest.fn((dto) => dto),
            get: jest.fn((params) => params),
          }),
        },
        {
          provide: getRepositoryToken(Weapon),
          useClass: Repository
        }
      ],
    }).compile();

    mockRepository = module.get<Repository<Weapon>>(getRepositoryToken(Weapon));
    jest.spyOn(mockRepository, 'findOne').mockImplementation(jest.fn());

    service = module.get<WeaponsService>(WeaponsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
