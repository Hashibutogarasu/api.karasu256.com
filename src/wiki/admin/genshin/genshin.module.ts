import { Module } from '@nestjs/common';
import { CharactersController } from './characters/characters.controller';
import { CharactersService } from './characters/characters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from '@/entities/genshin/wiki/character.entity';
import { WeaponsController } from './weapons/weapons.controller';
import { WeaponsService } from './weapons/weapons.service';
import { Weapon } from '@/entities/genshin/wiki/weapons.entity';
import { ArtifactsService } from './artifacts/artifacts.service';
import { ArtifactsController } from './artifacts/artifacts.controller';
import { Artifacts } from '@/entities/genshin/wiki/artifacts.entity';
import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service';
import { ArtifactSetsController } from './artifact-sets/artifact-sets.controller';
import { ArtifactSetsService } from './artifact-sets/artifact-sets.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Character,
      Weapon,
      Artifacts
    ]),
  ],
  controllers: [CharactersController, WeaponsController, ArtifactsController, CountriesController, ArtifactSetsController],
  providers: [CharactersService, WeaponsService, ArtifactsService, CountriesService, ArtifactSetsService]
})
export class GenshinModule { }
