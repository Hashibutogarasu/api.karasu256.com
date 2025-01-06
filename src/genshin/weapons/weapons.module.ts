import { Module } from '@nestjs/common';
import { WeaponsController } from './weapons.controller';
import { WeaponsService } from './weapons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenshinWeaponEntity } from '@/entities/genshin/weapon.entity';
import { UsersEntity } from '@/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GenshinWeaponEntity, UsersEntity])],
  controllers: [WeaponsController],
  providers: [WeaponsService]
})
export class WeaponsModule {}
