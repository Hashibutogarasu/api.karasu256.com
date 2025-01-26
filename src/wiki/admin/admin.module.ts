import { Module } from '@nestjs/common';
import { WeaponsModule } from './weapons/weapons.module';
import { ItemsModule } from './items/items.module';
import { ElementsModule } from './elements/elements.module';
import { CountriesModule } from './countries/countries.module';
import { CharactersModule } from './characters/characters.module';
import { ArtifactsModule } from './artifacts/artifacts.module';
import { ArtifactSetsModule } from './artifact-sets/artifact-sets.module';

@Module({
  imports: [WeaponsModule, ItemsModule, ElementsModule, CountriesModule, CharactersModule, ArtifactsModule, ArtifactSetsModule]
})
export class AdminModule { }
