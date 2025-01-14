import { Body, Module, Post } from '@nestjs/common';
import { GenshinController } from './genshin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '@/entities/user.entity';
import { CharacterInfo } from '@/entities/genshin/wiki/character_info.entity';
import { CharacterData } from '@/entities/genshin/wiki/character_data/character_data.entity';
import { CharacterPage } from '@/entities/genshin/wiki/character_data/character_page/character_page.entity';
import { CharacterExt } from '@/entities/genshin/wiki/character_data/character_page/character_ext/character_ext.entity';
import { CharacterModules } from '@/entities/genshin/wiki/character_data/character_page/character_modules.entity';
import { CharacterFilterValues } from '@/entities/genshin/wiki/character_data/character_page/character_filtervalues/character_filtervalues/character_filtervalues.entity';
import { CharacterValueType } from '@/entities/genshin/wiki/character_data/character_page/character_value_type.entity';
import { CharacterKey } from '@/entities/genshin/wiki/character_data/character_page/character_key.entity';
import { CharacterPostExt } from '@/entities/genshin/wiki/character_data/character_page/character_ext/character_postext.entity';
import { CharacterFilterValue } from '@/entities/genshin/wiki/character_data/character_page/character_filter_value';
import { CharacterEntity } from '@/entities/genshin/wiki/character.entity';
import { CharacterListEntity } from '@/entities/genshin/wiki/character/character_list.entity';
import { ArtifactModule } from './artifact/artifact.module';
import { CharactersModule } from './characters/characters.module';
import { GenshinService } from './genshin.service';

@Module({
  imports: [CharactersModule],
  providers: [GenshinService],
  controllers: [GenshinController]
})
export class GenshinModule {

}
