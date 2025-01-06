import { Module } from '@nestjs/common';
import { ArtifactSetsController } from './artifact-sets.controller';
import { ArtifactSetsService } from './artifact-sets.service';

@Module({
  controllers: [ArtifactSetsController],
  providers: [ArtifactSetsService]
})
export class ArtifactSetsModule {}
