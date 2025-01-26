import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { GenshinModule } from './genshin/genshin.module';

@Module({
  imports: [
    AdminModule,
    GenshinModule,
  ],
  providers: [],
  controllers: [],
})
export class WikiModule { }
