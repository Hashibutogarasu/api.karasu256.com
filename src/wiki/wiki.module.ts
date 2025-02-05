import { Module } from '@nestjs/common';
import { GenshinModule } from './public/genshin/genshin.module';
import { S3Service } from '@/s3/s3.service';
import { PublicModule } from './public/public.module';

@Module({
  imports: [
    PublicModule,
  ],
  providers: [S3Service],
  controllers: [],
})
export class WikiModule { }
