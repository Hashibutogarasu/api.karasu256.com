import { Gallery } from '@/entities/genshin/wiki/galleries.entity';
import { IBaseControllerAndService } from '@/types/basecontroller_service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GalleriesService implements IBaseControllerAndService {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleryRepository: Repository<Gallery>,
  ) { }

  async get(params: any): Promise<Gallery[]> {
    throw new Error('Method not implemented.');
  }
  async getOne(params: any): Promise<Gallery> {
    throw new Error('Method not implemented.');
  }
  async create(dto: any): Promise<Gallery> {
    throw new Error('Method not implemented.');
  }
  async update(dto: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async delete(dto: any): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
