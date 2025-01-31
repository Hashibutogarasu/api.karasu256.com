import { Module } from '@nestjs/common';
import { GenshinModule } from './genshin/genshin.module';
import { CommonModule } from './common/common.module';
import { S3Service } from '@/api/s3/s3.service';

@Module({
  imports: [
    GenshinModule,
    CommonModule,
  ],
  providers: [S3Service],
  controllers: [],
})
export class WikiModule { }
