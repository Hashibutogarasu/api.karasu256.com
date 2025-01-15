import { Module } from '@nestjs/common';
import { ArtifactsService } from './artifacts.service';
import { ArtifactsController } from './artifacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artifact } from '@/entities/genshin/wiki/artifact/artifact.entity';
import { UsersEntity } from '@/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Artifact, UsersEntity]),
  ],
  providers: [ArtifactsService],
  controllers: [ArtifactsController]
})
export class ArtifactModule { }
