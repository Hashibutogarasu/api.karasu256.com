import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SupabaseModule } from "./supabase/supabase.module";
import { AuthModule } from "./auth/auth.module";
import { EventsModule } from "./events/events.module";
import { UserModule } from "./user/user.module";
import { NodeController } from "./node/node.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PostModule } from "./post/post.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "typeorm/typeorm.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SupabaseModule,
    AuthModule,
    EventsModule,
    UserModule,
    PostModule,
  ],
  controllers: [AppController, NodeController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
