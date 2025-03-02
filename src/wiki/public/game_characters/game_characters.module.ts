import { Module } from '@nestjs/common';
import { GameCharactersController } from './game_characters.controller';
import { GameCharactersService } from './game_characters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gallery } from '@/entities/common/galleries.entity';
import { GameCharacter } from '@/entities/wiki/game_character';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery, GameCharacter])],
  controllers: [GameCharactersController],
  providers: [GameCharactersService]
})
export class GameCharactersModule { }
