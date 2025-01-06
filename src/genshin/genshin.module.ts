import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { WeaponsModule } from './weapons/weapons.module';
import { ArtifactsModule } from './artifacts/artifacts.module';
import { ArtifactSetsModule } from './artifact-sets/artifact-sets.module';
import { ElementsModule } from './elements/elements.module';
import { GenshinController } from './genshin.controller';
import { GenshinService } from './genshin.service';

@Module({
  imports: [CharactersModule, WeaponsModule, ArtifactsModule, ArtifactSetsModule, ElementsModule],
  controllers: [GenshinController],
  providers: [GenshinService]
})
export class GenshinModule {}
