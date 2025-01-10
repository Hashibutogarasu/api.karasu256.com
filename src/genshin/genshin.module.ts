import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { WeaponsModule } from './weapons/weapons.module';
import { ArtifactsModule } from './artifacts/artifacts.module';
import { ArtifactSetsModule } from './artifact-sets/artifact-sets.module';
import { ElementsModule } from './elements/elements.module';
import { GenshinController } from './genshin.controller';
import { GenshinService } from './genshin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '@/entities/user.entity';
import { CountriesModule } from './countries/countries.module';
import { WikiModule } from './wiki/wiki.module';

@Module({
  imports: [CharactersModule, WeaponsModule, ArtifactsModule, ArtifactSetsModule, ElementsModule, TypeOrmModule.forFeature([UsersEntity]), CountriesModule, WikiModule],
  controllers: [GenshinController],
  providers: [GenshinService]
})
export class GenshinModule {}
