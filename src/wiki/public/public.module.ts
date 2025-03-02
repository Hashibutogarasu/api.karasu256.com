import {Module} from "@nestjs/common";
import {GalleriesModule} from "./galleries/galleries.module";
import {GalleriesService} from "./galleries/galleries.service";
import {S3Service} from "@/s3/s3.service";
import {GalleriesController} from "./galleries/galleries.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Gallery} from "@/entities/common/galleries.entity";
import { GameCharactersModule } from './game_characters/game_characters.module';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery]), GalleriesModule, GameCharactersModule],
  controllers: [GalleriesController],
  providers: [GalleriesService, S3Service],
})
export class PublicModule {}
