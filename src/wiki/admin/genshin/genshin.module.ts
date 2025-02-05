import { Gallery } from '@/entities/common/galleries.entity';
import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { Artifacts } from '@/entities/wiki/genshin/artifacts.entity';
import { Country } from '@/entities/wiki/genshin/countries.entity';
import { GICharacter } from '@/entities/wiki/genshin/gi_character.entity';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { Weapon } from '@/entities/wiki/genshin/weapons.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtifactSetsController } from './artifact-sets/artifact-sets.controller';
import { ArtifactSetsService } from './artifact-sets/artifact-sets.service';
import { ArtifactsController } from './artifacts/artifacts.controller';
import { ArtifactsService } from './artifacts/artifacts.service';
import { CharactersController } from './characters/characters.controller';
import { CharactersService } from './characters/characters.service';
import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service';
import { VersionsController } from './versions/versions.controller';
import { VersionsService } from './versions/versions.service';
import { WeaponsController } from './weapons/weapons.controller';
import { WeaponsService } from './weapons/weapons.service';

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
  controllers: [ArtifactSetsController, ArtifactsController, CharactersController, CountriesController, VersionsController, WeaponsController],
  providers: [ArtifactSetsService, ArtifactsService, CharactersService, CountriesService, VersionsService, WeaponsService]
})
export class GenshinAdminModule { }
