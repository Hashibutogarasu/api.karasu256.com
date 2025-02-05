import { Module } from '@nestjs/common';
import { CharactersController } from './characters/characters.controller';
import { CharactersService } from './characters/characters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GICharacter } from '@/entities/wiki/genshin/gi_character.entity';
import { WeaponsController } from './weapons/weapons.controller';
import { WeaponsService } from './weapons/weapons.service';
import { Weapon } from '@/entities/wiki/genshin/weapons.entity';
import { ArtifactsService } from './artifacts/artifacts.service';
import { ArtifactsController } from './artifacts/artifacts.controller';
import { Artifacts } from '@/entities/wiki/genshin/artifacts.entity';
import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service';
import { ArtifactSetsController } from './artifact-sets/artifact-sets.controller';
import { ArtifactSetsService } from './artifact-sets/artifact-sets.service';
import { Country } from '@/entities/wiki/genshin/countries.entity';
import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { VersionsController } from './versions/versions.controller';
import { VersionsService } from './versions/versions.service';
import { Gallery } from '@/entities/common/galleries.entity';
import { GalleriesController } from '../galleries/galleries.controller';
import { GalleriesService } from '../galleries/galleries.service';
import { S3Service } from '@/s3/s3.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Gallery,
      GICharacter,
      Weapon,
      Artifacts,
      Country,
      ArtifactSets,
      VersionsEntity,
    ]),
  ],
  controllers: [GalleriesController, CharactersController, WeaponsController, ArtifactsController, CountriesController, ArtifactSetsController, VersionsController],
  providers: [S3Service, GalleriesService, CharactersService, WeaponsService, ArtifactsService, CountriesService, ArtifactSetsService, VersionsService]
})
export class GenshinModule { }
