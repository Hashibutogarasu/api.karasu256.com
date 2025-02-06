import { GalleriesController } from '@/wiki/public/galleries/galleries.controller';
import { Module } from '@nestjs/common';
import { GalleriesService } from './galleries.service';
import { S3Service } from '@/s3/s3.service';
import { Gallery } from '@/entities/common/galleries.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery])],
  controllers: [GalleriesController],
  providers: [GalleriesService, S3Service]
})
export class GalleriesModule { }
