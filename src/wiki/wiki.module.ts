import { Module } from '@nestjs/common';
import { GenshinModule } from './genshin/genshin.module';

@Module({
  imports: [
    GenshinModule,
  ],
  providers: [],
  controllers: [],
})
export class WikiModule { }
