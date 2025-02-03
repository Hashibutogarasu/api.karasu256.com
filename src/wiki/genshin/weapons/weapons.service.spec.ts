import { Test, TestingModule } from '@nestjs/testing';
import { WeaponsService } from './weapons.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Weapon } from '@/entities/genshin/wiki/weapons.entity';
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

  it('create a weapon', async () => {
    const weapon = await service.create({
      name: 'Test Weapon',
      type: 'Test Type',
      rarity: 5,
    });

    const { ...rest } = weapon;

    expect(await service.get({ ...rest })).toEqual(rest);
  });
});
