import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { WsAdapter } from './adapter/ws-adapter';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    const config = new DocumentBuilder()
      .setTitle(`Karasu Lab API ${process.env.NODE_ENV}`)
      .setDescription('API documentation for Karasu Lab')
      .setVersion('1.0')
      .addServer(process.env.BASE_URL)
      .addGlobalParameters({
        in: 'header',
        name: 'Authorization',
        required: false,
        description: 'Bearer token',
        schema: {
          type: 'string',
          default: 'Bearer {{token}}',
        },
      })
      .build();

    const document = SwaggerModule.createDocument(app, config);
    const documentFactory = () => document;

    SwaggerModule.setup('api', app, documentFactory);
  }

  await app.listen(8080);
}
bootstrap();
