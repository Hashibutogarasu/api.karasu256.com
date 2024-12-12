import { Logger, Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { EventsService } from './events.service';

@Module({
  imports: [],
  controllers: [],
  providers: [EventsGateway, EventsService, Logger],
})
export class EventsModule { }
