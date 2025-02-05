import { Test, TestingModule } from '@nestjs/testing';
import { ArtifactSetsController } from './artifact-sets.controller';

describe('ArtifactSetsController', () => {
  let controller: ArtifactSetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtifactSetsController],
    }).compile();

    controller = module.get<ArtifactSetsController>(ArtifactSetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
