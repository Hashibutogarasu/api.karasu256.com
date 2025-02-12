import { Module } from '@nestjs/common';
import { GenshinModule } from './genshin/genshin.module';
import { GalleriesModule } from './galleries/galleries.module';
import { GalleriesService } from './galleries/galleries.service';
import { S3Service } from '@/s3/s3.service';
import { GalleriesController } from './galleries/galleries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gallery } from '@/entities/common/galleries.entity';
import { Hi3Module } from './honkai_impact_3rd/hi3.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Gallery]),
    GenshinModule,
    GalleriesModule,
    Hi3Module,
  ],
  controllers: [GalleriesController],
  providers: [GalleriesService, S3Service],
})
export class PublicModule { }
