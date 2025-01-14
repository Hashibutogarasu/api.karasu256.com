import { Module } from '@nestjs/common';
import { ArtifactService } from './artifact.service';
import { ArtifactController } from './artifact.controller';

@Module({
  providers: [ArtifactService],
  controllers: [ArtifactController]
})
export class ArtifactModule {}
