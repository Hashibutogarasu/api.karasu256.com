import { Module } from '@nestjs/common';
import { CharactersController } from './characters/characters.controller';
import { CharactersService } from './characters/characters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from '@/entities/genshin/wiki/character.entity';
import { WeaponsController } from './weapons/weapons.controller';
import { WeaponsService } from './weapons/weapons.service';
import { Weapon } from '@/entities/genshin/wiki/weapons.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Character,
      Weapon
    ]),
  ],
  controllers: [CharactersController, WeaponsController],
  providers: [CharactersService, WeaponsService]
})
export class GenshinModule { }
