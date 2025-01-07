import { Module } from '@nestjs/common';
import { ArtifactSetsController } from './artifact-sets.controller';
import { ArtifactSetsService } from './artifact-sets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '@/entities/user.entity';
import { GenshinArtifactSetEntity } from '@/entities/genshin/artifacts/artifact_set.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, GenshinArtifactSetEntity])],
  controllers: [ArtifactSetsController],
  providers: [ArtifactSetsService]
})
export class ArtifactSetsModule {}
