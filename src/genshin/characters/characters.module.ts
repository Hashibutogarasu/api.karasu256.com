import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenshinCharacterEntity } from '@/entities/genshin/character.entity';
import { UsersEntity } from '@/entities/user.entity';
import { InfoModule } from './info/info.module';

@Module({
  imports: [TypeOrmModule.forFeature([GenshinCharacterEntity, UsersEntity]), InfoModule],
  controllers: [CharactersController],
  providers: [CharactersService]
})
export class CharactersModule {}
