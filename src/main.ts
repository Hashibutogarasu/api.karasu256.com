import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { loadEnv } from "@/utils/dotenv";

async function bootstrap() {
  loadEnv();

  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "local") {
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

    SwaggerModule.setup("api", app, documentFactory);
  }

  if (process.env.NODE_ENV === "production") {
    app.useGlobalPipes(
      new ValidationPipe({
        disableErrorMessages: true,
      }),
    );
  } else {
    app.useGlobalPipes(new ValidationPipe());
  }

  await app.listen(8080);
}
bootstrap();
