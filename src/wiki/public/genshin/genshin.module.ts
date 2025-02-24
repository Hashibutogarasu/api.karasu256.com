import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GICharacter } from '@/entities/wiki/genshin/gi_character.entity';
import { Weapon } from '@/entities/wiki/genshin/weapons.entity';
import { Artifacts } from '@/entities/wiki/genshin/artifacts.entity';
import { Country } from '@/entities/wiki/genshin/countries.entity';
import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { CharactersController } from './characters/characters.controller';
import { CharactersService } from './characters/characters.service';
import { WeaponsController } from './weapons/weapons.controller';
import { WeaponsService } from './weapons/weapons.service';
import { ArtifactsService } from './artifacts/artifacts.service';
import { ArtifactsController } from './artifacts/artifacts.controller';
import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service';
import { ArtifactSetsController } from './artifact-sets/artifact-sets.controller';
import { ArtifactSetsService } from './artifact-sets/artifact-sets.service';
import { VersionsController } from './versions/versions.controller';
import { VersionsService } from './versions/versions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GICharacter,
      Weapon,
      Artifacts,
      Country,
      ArtifactSets,
      VersionsEntity,
    ]),
  ],
  controllers: [CharactersController, WeaponsController, ArtifactsController, CountriesController, ArtifactSetsController, VersionsController],
  providers: [CharactersService, WeaponsService, ArtifactsService, CountriesService, ArtifactSetsService, VersionsService]
})
export class GenshinModule { }
