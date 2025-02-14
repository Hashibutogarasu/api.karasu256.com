import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { WikiModule } from './wiki/wiki.module';
import { validate } from "./env-validator";
import { AdminAuthModule } from './auth/admin/admin_auth.module';
import { CognitoAuthModule } from './cognito-auth/cognito-auth.module';
import { TypeormConnectionModule } from './typeorm-connection/typeorm-connection.module';
import { S3Service } from './s3/s3.service';
import { PaginationMiddleware } from "./middleware/pagination.middleware";
import { PublicAuthModule } from './auth/public-auth/public-auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      validate,
    }),
    WikiModule,
    CognitoAuthModule,
    AdminAuthModule,
    CognitoAuthModule,
    TypeormConnectionModule,
    PublicAuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, S3Service],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PaginationMiddleware)
      .forRoutes({ path: 'api/', method: RequestMethod.GET })
  }
}
