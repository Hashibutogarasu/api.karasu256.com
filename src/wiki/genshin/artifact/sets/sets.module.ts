import { Module } from '@nestjs/common';
import { SetsController } from './sets.controller';
import { SetsService } from './sets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtifactSet } from '@/entities/genshin/wiki/artifact/artifact_set.entity';
import { UsersEntity } from '@/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArtifactSet, UsersEntity])
  ],
  providers: [SetsService],
  controllers: [SetsController]
})
export class SetsModule { }
