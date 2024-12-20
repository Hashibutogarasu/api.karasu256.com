import { Logger, Module } from "@nestjs/common";
import { EventsGateway } from "@/events/events.gateway";
import { EventsService } from "@/events/events.service";

@Module({
  imports: [],
  controllers: [],
  providers: [EventsGateway, EventsService, Logger],
})
export class EventsModule {}
