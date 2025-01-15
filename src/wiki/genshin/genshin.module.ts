import { Module } from '@nestjs/common';
import { GenshinController } from './genshin.controller';
import { CharactersModule } from './characters/characters.module';
import { GenshinService } from './genshin.service';
import { ArtifactModule } from './artifacts/artifacts.module';
import { SetsModule } from './artifacts/sets/sets.module';

@Module({
  imports: [CharactersModule, ArtifactModule, SetsModule],
  providers: [GenshinService],
  controllers: [GenshinController]
})
export class GenshinModule {

}
