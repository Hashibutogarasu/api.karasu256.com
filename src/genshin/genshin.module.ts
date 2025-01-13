import { Module } from '@nestjs/common';
import { GenshinController } from './genshin.controller';
import { GenshinService } from './genshin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '@/entities/user.entity';
import { WikiModule } from './wiki/wiki.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity]), WikiModule],
  controllers: [GenshinController],
  providers: [GenshinService]
})
export class GenshinModule {}
