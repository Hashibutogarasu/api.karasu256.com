import { Gallery } from '@/entities/common/galleries.entity';
import { ArtifactSets } from '@/entities/wiki/genshin/artifact-sets.entity';
import { Artifacts } from '@/entities/wiki/genshin/artifacts.entity';
import { Country } from '@/entities/wiki/genshin/countries.entity';
import { GICharacter } from '@/entities/wiki/genshin/gi_character.entity';
import { VersionsEntity } from '@/entities/wiki/genshin/versions.entity';
import { Weapon } from '@/entities/wiki/genshin/weapons.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersController } from './characters/characters.controller';
import { CharactersService } from './characters/characters.service';
import { ArtifactSetsController } from './artifact-sets/artifact-sets.controller';
import { ArtifactSetsService } from './artifact-sets/artifact-sets.service';
import { RegionsController } from './regions/regions.controller';
import { RegionsService } from './regions/regions.service';
import { WeaponsService } from './weapons/weapons.service';
import { WeaponsController } from './weapons/weapons.controller';
import { VersionsService } from './versions/versions.service';
import { VersionsController } from './versions/versions.controller';

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
  controllers: [CharactersController, ArtifactSetsController, RegionsController, WeaponsController, VersionsController],
  providers: [CharactersService, ArtifactSetsService, RegionsService, WeaponsService, VersionsService]
})
export class GenshinAdminModule { }
