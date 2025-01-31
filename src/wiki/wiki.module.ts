import { Module } from '@nestjs/common';
import { GenshinModule } from './genshin/genshin.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    GenshinModule,
    CommonModule,
  ],
  providers: [],
  controllers: [],
})
export class WikiModule { }
