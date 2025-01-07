import { Module } from '@nestjs/common';
import { ArtifactsController } from './artifacts.controller';
import { ArtifactsService } from './artifacts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '@/entities/user.entity';
import { GenshinArtifactEntity } from '@/entities/genshin/artifacts/artifact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, GenshinArtifactEntity])],
  controllers: [ArtifactsController],
  providers: [ArtifactsService]
})
export class ArtifactsModule {}
