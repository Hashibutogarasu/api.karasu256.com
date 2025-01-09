import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { loadEnv } from "@/utils/dotenv";
import { patchNestJsSwagger } from "nestjs-zod";

async function bootstrap() {
  loadEnv();

  const app = await NestFactory.create(AppModule);
  patchNestJsSwagger();

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle(`Karasu Lab API ${process.env.NODE_ENV}`)
    .setDescription("API documentation for Karasu Lab")
    .setVersion("1.0")
    .addServer(process.env.BASE_URL)
    .addGlobalParameters({
      in: "header",
      name: "Authorization",
      description: "Bearer token",
      schema: {
        type: "string",
        default: "Bearer {{token}}",
      },
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const documentFactory = () => document;

  SwaggerModule.setup("docs", app, documentFactory, {
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
