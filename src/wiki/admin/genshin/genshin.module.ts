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
  controllers: [CharactersController],
  providers: [CharactersService]
})
export class GenshinAdminModule { }
