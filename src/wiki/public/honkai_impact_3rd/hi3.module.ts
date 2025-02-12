import { HI3Characters } from '@/entities/wiki/hi3/hi3_characters.entity';
import { HI3SkillsEntity } from '@/entities/wiki/hi3/hi3_skills.entity';
import { HI3StigmatasEntity } from '@/entities/wiki/hi3/hi3_stigmatas.entity';
import { HI3WeaponsEntity } from '@/entities/wiki/hi3/hi3_weapons.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hi3CharactersController } from './hi3_characters/hi3_characters.controller';
import { Hi3CharactersService } from './hi3_characters/hi3_characters.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    HI3Characters,
    HI3SkillsEntity,
    HI3StigmatasEntity,
    HI3WeaponsEntity
  ])],
  controllers: [Hi3CharactersController],
  providers: [Hi3CharactersService],
})
export class Hi3Module {}
