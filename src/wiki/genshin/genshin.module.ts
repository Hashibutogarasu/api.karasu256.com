import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { WeaponsModule } from './weapons/weapons.module';
import { ElementsModule } from './elements/elements.module';
import { ItemsModule } from './items/items.module';
import { ArtifactsModule } from './artifacts/artifacts.module';
import { ArtifactSetsModule } from './artifact-sets/artifact-sets.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [CharactersModule, WeaponsModule, ElementsModule, ItemsModule, ArtifactsModule, ArtifactSetsModule, CountriesModule]
})
export class GenshinModule {}
