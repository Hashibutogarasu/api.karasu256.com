import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '@/entities/user.entity';
import { CharacterPostExt } from '@/entities/genshin/wiki/character_data/character_page/character_ext/character_postext.entity';
import { CharacterInfo } from '@/entities/genshin/wiki/character_info.entity';
import { CharacterPage } from '@/entities/genshin/wiki/character_data/character_page/character_page.entity';
import { CharacterFilterValues } from '@/entities/genshin/wiki/character_data/character_page/character_filtervalues/character_filtervalues/character_filtervalues.entity';
import { CharacterFilterValue } from '@/entities/genshin/wiki/character_data/character_page/character_filter_value';
import { CharacterModules } from '@/entities/genshin/wiki/character_data/character_page/character_modules.entity';
import { CharacterExt } from '@/entities/genshin/wiki/character_data/character_page/character_ext/character_ext.entity';
import { CharacterValueType } from '@/entities/genshin/wiki/character_data/character_page/character_value_type.entity';
import { CharacterKey } from '@/entities/genshin/wiki/character_data/character_page/character_key.entity';
import { CharacterEntity } from '@/entities/genshin/wiki/character.entity';
import { CharacterListEntity } from '@/entities/genshin/wiki/character/character_list.entity';
import { CharacterData } from '@/entities/genshin/wiki/character_data/character_data.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersEntity,
      CharacterPostExt,
      CharacterInfo,
      CharacterData,
      CharacterPage,
      CharacterFilterValues,
      CharacterFilterValue,
      CharacterModules,
      CharacterExt,
      CharacterValueType,
      CharacterKey,
      CharacterEntity,
      CharacterListEntity,
    ]),
  ],
  controllers: [CharactersController],
  providers: [CharactersService]
})
export class CharactersModule { }
