import { Module } from '@nestjs/common';
import { ElementsController } from './elements.controller';
import { ElementsService } from './elements.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenshinElementEntity } from '@/entities/genshin/element.entity';
import { UsersEntity } from '@/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GenshinElementEntity, UsersEntity])],
  controllers: [ElementsController],
  providers: [ElementsService]
})
export class ElementsModule {}
