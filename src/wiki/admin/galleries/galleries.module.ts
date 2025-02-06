import { Module } from '@nestjs/common';
import { S3Service } from '@/s3/s3.service';
import { Gallery } from '@/entities/common/galleries.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GalleriesService } from './galleries.service';
import { GalleriesController } from './galleries.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery])],
  controllers: [GalleriesController],
  providers: [GalleriesService, S3Service]
})
export class GalleriesModule { }
