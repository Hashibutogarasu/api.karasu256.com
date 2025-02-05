import { Module } from '@nestjs/common';
import { GenshinModule } from './public/genshin/genshin.module';
import { S3Service } from '@/s3/s3.service';
import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    PublicModule,
    AdminModule,
  ],
  providers: [S3Service],
  controllers: [],
})
export class WikiModule { }
