import { Module } from '@nestjs/common';
import { GenshinAdminModule } from './genshin/genshin.module';
import { GalleriesModule } from './galleries/galleries.module';

@Module({
  imports: [GenshinAdminModule, GalleriesModule],
  controllers: [],
  providers: []
})
export class AdminModule {}
