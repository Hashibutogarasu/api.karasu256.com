import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions, OpenAPIObject } from "@nestjs/swagger";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { patchNestJsSwagger } from "nestjs-zod";
import * as bodyParser from 'body-parser';
import { AdminModule } from "./wiki/admin/admin.module";
import { GenshinAdminModule } from "./wiki/admin/genshin/genshin.module";
import { GalleriesModule as GalleriesAdminModule } from "./wiki/admin/galleries/galleries.module";
import { GenshinModule } from "./wiki/public/genshin/genshin.module";
import { GalleriesModule } from "./wiki/public/galleries/galleries.module";
import { HI3Module as HI3AdminModule } from "./wiki/admin/honkai_impact_3rd/hi3.module";
import { Hi3Module } from "./wiki/public/honkai_impact_3rd/hi3.module";
import { AdminAuthModule } from "./auth/admin/admin_auth.module";
import { PublicAuthModule } from "./auth/public-auth/public-auth.module";
import admin from 'firebase-admin';
import { initializeApp } from 'firebase/app';

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

function setUpDocument(
  title: string,
  path: string,
  app: INestApplication,
  config: DocumentBuilder,
  options: SwaggerCustomOptions,
  include: any[],
) {
  options.customSiteTitle = title;
  const document = SwaggerModule.createDocument(app, config.build(), {
    include,
  });
  const documentFactory = () => document;

  SwaggerModule.setup(`api/${path}`, app, documentFactory, {
    ...options,
    jsonDocumentUrl: `api/${path}/api-json`,
    yamlDocumentUrl: `api/${path}/api-yaml`,
  });
}

function getTitle(title: string) {
  return `Karasu Lab ${title} API Document ${process.env.NODE_ENV.charAt(0).toUpperCase() + process.env.NODE_ENV.slice(1)}`;
}

async function bootstrap() {
  const publicPort = 8080;

  const app = configureApp(await NestFactory.create(AppModule));
  patchNestJsSwagger();

  const node_env = process.env.NODE_ENV.charAt(0).toUpperCase() + process.env.NODE_ENV.slice(1);

  const config = new DocumentBuilder()
    .setTitle("Karasu Lab API")
    .setLicense("MIT", "https://opensource.org/licenses/MIT")
    .setDescription("API documentation for Karasu Lab")
    .setVersion("3.3.30")
    .addServer(process.env.BASE_URL)
    .addBearerAuth({
      type: 'http',
      bearerFormat: 'Bearer',
      in: 'Header',
      name: 'Authorization',
      scheme: 'bearer',
    });

  const options: SwaggerCustomOptions = {
    useGlobalPrefix: true,
    customSiteTitle: "Karasu Lab API",
    customCssUrl: "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui.min.css",
    customJs: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui-bundle.js",
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui-standalone-preset.js",
    ],
  };

  setUpDocument(getTitle("Public"), "public", app, config, options, [
    GenshinModule,
    GalleriesModule,
    Hi3Module,
  ]);

  setUpDocument(getTitle("Admin"), "admin", app, config, options, [
    AppModule,
    AdminModule,
    GalleriesAdminModule,
    GenshinAdminModule,
    HI3AdminModule,
    AdminAuthModule,
  ]);

  setUpDocument(getTitle("Auth"), "auth", app, config, options, [
    PublicAuthModule,
  ]);

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: process.env.NODE_ENV !== "production",
    }),
  );

  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId: process.env.FIREBASE_PROJECT_ID,
    } as admin.ServiceAccount),
  });

  initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
  });

  await app.listen(process.env.PORT || publicPort);
}
bootstrap();
