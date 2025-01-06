import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenshinCountryEntity } from '@/entities/genshin/country.entity';
import { UsersEntity } from '@/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GenshinCountryEntity, UsersEntity])],
  providers: [CountriesService],
  controllers: [CountriesController]
})
export class CountriesModule { }
