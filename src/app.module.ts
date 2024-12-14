import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './supabase/supabase.module';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SupabaseModule, AuthModule, EventsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
