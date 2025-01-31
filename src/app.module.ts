import { Module } from "@nestjs/common";
import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { WikiModule } from './wiki/wiki.module';
import { validate } from "./env-validator";
import { AuthModule } from './auth/auth.module';
import { CognitoAuthModule } from './cognito-auth/cognito-auth.module';
import { TypeormConnectionModule } from './typeorm-connection/typeorm-connection.module';
import { S3Module } from 'nestjs-s3';
import { CloudflareR2Module } from './cloudflare-r2/cloudflare-r2.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      validate,
    }),
    WikiModule,
    CognitoAuthModule,
    AuthModule,
    CognitoAuthModule,
    TypeormConnectionModule,
    CloudflareR2Module,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule { }
