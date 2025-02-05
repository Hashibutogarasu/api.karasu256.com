import { Test, TestingModule } from '@nestjs/testing';
import { ArtifactSetsService } from './artifact-sets.service';
import { Repository } from 'typeorm';
import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ArtifactSetsService', () => {
  let mockRepository: Repository<ArtifactSets>;
  let service: ArtifactSetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ArtifactSetsService,
          useFactory: () => ({
            create: jest.fn((dto) => dto),
            get: jest.fn((params) => params),
          }),
        },
        {
          provide: getRepositoryToken(ArtifactSets),
          useClass: Repository,
        },
      ],
    }).compile();

    mockRepository = module.get<Repository<ArtifactSets>>(getRepositoryToken(ArtifactSets));
    jest.spyOn(mockRepository, 'findOne').mockImplementation(jest.fn());

    service = module.get<ArtifactSetsService>(ArtifactSetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
