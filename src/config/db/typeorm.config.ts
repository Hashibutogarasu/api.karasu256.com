import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { loadEnv } from "@/utils/dotenv";
import { join } from "path";

loadEnv();

const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_PORT = process.env.DATABASE_PORT;
const DATABASE_DB = process.env.DATABASE_DB;

if (!DATABASE_HOST || !DATABASE_USER || !DATABASE_PASSWORD || !DATABASE_PORT || !DATABASE_DB) {
  throw new Error("Enviroment Database Error");
}

const MIGRATION_DIR = join(__dirname, "/../../config/db/migrations/**/*.ts");
const ENTITIES_DIR = join(__dirname, "/../../entities/**/*.{ts,js}");

export const typeormConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: DATABASE_HOST,
  port: parseInt(DATABASE_PORT),
  database: DATABASE_DB,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  entities: [ENTITIES_DIR],
  migrations: [MIGRATION_DIR],
  synchronize: false,
  logging: false,
  dropSchema: false,
};
