import { Test, TestingModule } from '@nestjs/testing';
import { ArtifactSetsService } from './artifact-sets.service';

describe('ArtifactSetsService', () => {
  let service: ArtifactSetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtifactSetsService],
    }).compile();

    service = module.get<ArtifactSetsService>(ArtifactSetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
