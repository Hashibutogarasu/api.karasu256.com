import { Module } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { ArtifactsController } from './artifacts.controller';

@Module({
  providers: [ArtifactsService],
  controllers: [ArtifactsController]
})
export class ArtifactModule { }
