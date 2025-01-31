import { Module } from '@nestjs/common';
import { GalleriesController } from './galleries/galleries.controller';
import { GalleriesService } from './galleries/galleries.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gallery } from '@/entities/common/galleries.entity';
import { S3Service } from '@/s3/s3.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery])],
  controllers: [GalleriesController],
  providers: [GalleriesService, S3Service]
})
export class CommonModule { }
