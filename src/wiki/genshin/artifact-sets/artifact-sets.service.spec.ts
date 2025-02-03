import { Test, TestingModule } from '@nestjs/testing';
import { ArtifactSetsService } from './artifact-sets.service';
import { Repository } from 'typeorm';
import { ArtifactSets } from '@/entities/genshin/wiki/artifact-sets.entity';
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

  it('create a artifact set', async () => {
    const artifactSets = await service.create({
      name: 'Test Artifact Set',
      description: 'Test Artifact Set Description',
      icon_url: 'https://example.com/icon.png',
      one_set_effect: 'Test One Set Effect',
      two_set_effect: 'Test Two Set Effect',
      four_set_effect: 'Test Four Set Effect',
      artifacts: [],
      characters: [],
    });

    const { ...rest } = artifactSets;

    expect(await service.get({ ...rest })).toEqual(rest);
  });
});
