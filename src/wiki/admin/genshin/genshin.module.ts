import { Module } from '@nestjs/common';
import { CharactersController } from './characters/characters.controller';
import { CharactersService } from './characters/characters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from '@/entities/genshin/wiki/character.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Character
    ]),
  ],
  controllers: [CharactersController],
  providers: [CharactersService]
})
export class GenshinModule { }
