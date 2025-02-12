import { Module } from '@nestjs/common';
import { GenshinAdminModule } from './genshin/genshin.module';
import { GalleriesModule } from './galleries/galleries.module';
import { HI3Module } from './honkai_impact_3rd/hi3.module';

@Module({
  imports: [GenshinAdminModule, GalleriesModule, HI3Module],
  controllers: [],
  providers: []
})
export class AdminModule {}
