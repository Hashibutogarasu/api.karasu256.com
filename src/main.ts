import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { patchNestJsSwagger } from "nestjs-zod";
import * as bodyParser from 'body-parser';
import * as basicAuth from 'express-basic-auth'
import { GenshinModule } from "./wiki/public/genshin/genshin.module";
import { AdminModule } from "./wiki/admin/admin.module";
import { GenshinAdminModule } from "./wiki/admin/genshin/genshin.module";

function configureApp(app: INestApplication) {
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

  return app;
}

async function bootstrap() {
  const app = configureApp(await NestFactory.create(AppModule));
  const privateApp = configureApp(await NestFactory.create(AppModule));

  patchNestJsSwagger();

  const config = new DocumentBuilder()
    .setTitle(`Karasu Lab API ${process.env.NODE_ENV}`)
    .setLicense("MIT", "https://opensource.org/licenses/MIT")
    .setDescription("API documentation for Karasu Lab")
    .setVersion("1.0.3")
    .addServer(process.env.BASE_URL)
    .addBearerAuth({
      type: 'http',
      bearerFormat: 'Bearer',
      in: 'Header',
      name: 'Authorization',
      scheme: 'bearer',
    })
    .build();

  const options: SwaggerCustomOptions = {
    useGlobalPrefix: true,
    customSiteTitle: "Karasu Lab API",
    customCssUrl: "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui.min.css",
    customJs: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui-bundle.js",
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui-standalone-preset.js",
    ],
  };

  const publicdocument = SwaggerModule.createDocument(app, config, {
    include: [
      GenshinModule
    ],
  });
  const publicDocumentFactory = () => publicdocument;

  SwaggerModule.setup("api/public", app, publicDocumentFactory, {
    ...options,
    jsonDocumentUrl: "/api/public/api-json",
    yamlDocumentUrl: "/api/public/api-yaml",
  });

  const privateDocument = SwaggerModule.createDocument(privateApp, config, {
    include: [
      AdminModule,
      GenshinAdminModule
    ],
  });

  const privateDocumentFactory = () => privateDocument;

  SwaggerModule.setup("api/private", privateApp, privateDocumentFactory, {
    ...options,
    jsonDocumentUrl: "/api/private/api-json",
    yamlDocumentUrl: "/api/private/api-yaml",
  });

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: process.env.NODE_ENV !== "production",
    }),
  );

  privateApp.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: process.env.NODE_ENV !== "production",
    }),
  );

  await app.listen(8080);
  await privateApp.listen(8081);
}
bootstrap();
