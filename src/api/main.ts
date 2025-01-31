import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/api/app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { patchNestJsSwagger } from "nestjs-zod";
import * as bodyParser from 'body-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  patchNestJsSwagger();

  app.enableCors();

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  const config = new DocumentBuilder()
    .setTitle(`Karasu Lab API ${process.env.NODE_ENV}`)
    .setDescription("API documentation for Karasu Lab")
    .setVersion("1.0")
    .addServer(process.env.BASE_URL)
    .addBearerAuth({
      type: 'http',
      bearerFormat: 'Bearer',
      in: 'Header',
      name: 'Authorization',
      scheme: 'bearer',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const documentFactory = () => document;

  SwaggerModule.setup("api", app, documentFactory, {
    useGlobalPrefix: true,
    customCssUrl: "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui.min.css",
    customJs: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui-bundle.js",
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui-standalone-preset.js",
    ],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: process.env.NODE_ENV !== "production",
    }),
  );

  await app.listen(8080);
}
bootstrap();
