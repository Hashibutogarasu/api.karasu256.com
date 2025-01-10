import { Body, Module, Post } from '@nestjs/common';
import { WikiService } from './wiki.service';
import { WikiController } from './wiki.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenshinCharacterEntity } from '@/entities/genshin/character/character.entity';
import { GenshinElementEntity } from '@/entities/genshin/element.entity';
import { GenshinCountryEntity } from '@/entities/genshin/country.entity';
import { GenshinWeaponTypeEntity } from '@/entities/genshin/weapons/weapon_type';
import { GenshinCharacterInfoEntity } from '@/entities/genshin/character/info.entity';
import { UsersEntity } from '@/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, GenshinCharacterEntity, GenshinElementEntity, GenshinCountryEntity, GenshinWeaponTypeEntity, GenshinCharacterInfoEntity])],
  providers: [WikiService],
  controllers: [WikiController]
})
export class WikiModule {

}
