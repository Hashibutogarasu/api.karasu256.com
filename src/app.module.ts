import { Module } from "@nestjs/common";
import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { SupabaseModule } from "@/supabase/supabase.module";
import { AuthModule } from "@/auth/auth.module";
import { EventsModule } from "@/events/events.module";
import { UserModule } from "@/user/user.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PostModule } from "@/post/post.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "@/config/db/typeorm.config";
import { NodeModule } from "@/node/node.module";
import { UsersEntity } from "@/entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    TypeOrmModule.forFeature([UsersEntity]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SupabaseModule,
    AuthModule,
    EventsModule,
    UserModule,
    PostModule,
    NodeModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
