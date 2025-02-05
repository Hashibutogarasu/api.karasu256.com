import { Module } from '@nestjs/common';
import { GenshinModule } from './genshin/genshin.module';

@Module({
  imports: [GenshinModule]
})
export class AdminModule {}
