import { Test, TestingModule } from '@nestjs/testing';
import { ArtifactsService } from './artifacts.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Artifacts } from '@/entities/wiki/genshin/artifacts.entity';
import { Repository } from 'typeorm';

describe('ArtifactsService', () => {
  let service: ArtifactsService;
  let mockRepository: Repository<Artifacts>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ArtifactsService,
          useFactory: () => ({
            create: jest.fn((dto) => dto),
            get: jest.fn((params) => params),
          }),
        },
        {
          provide: getRepositoryToken(Artifacts),
          useClass: Repository
        }
      ],
    }).compile();

    mockRepository = module.get<Repository<Artifacts>>(getRepositoryToken(Artifacts));
    jest.spyOn(mockRepository, 'findOne').mockImplementation(jest.fn());

    service = module.get<ArtifactsService>(ArtifactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
