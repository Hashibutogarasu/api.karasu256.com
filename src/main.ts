import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { patchNestJsSwagger } from "nestjs-zod";
import * as bodyParser from 'body-parser';
import * as packageJson from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  patchNestJsSwagger();

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  app.getHttpAdapter().getInstance().set('etag', false);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  const config = new DocumentBuilder()
    .setTitle(`Karasu Lab API ${process.env.NODE_ENV}`)
    .setLicense("MIT", "https://opensource.org/licenses/MIT")
    .setDescription("API documentation for Karasu Lab")
    .setVersion(packageJson.version)
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
    jsonDocumentUrl: "/api/json",
    yamlDocumentUrl: "/api/yaml",
  });

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: process.env.NODE_ENV !== "production",
    }),
  );

  await app.listen(8080);
}
bootstrap();
