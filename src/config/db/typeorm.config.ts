import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { loadEnv } from "@/utils/dotenv";
import { join } from "path";

loadEnv();

const { POSTGRES_URL } = process.env;

if (!POSTGRES_URL) {
  throw new Error("Enviroment Database Error");
}

const MIGRATION_DIR = join(__dirname, `/../../config/db/migrations/${process.env.NODE_ENV}/**/*.{ts,js}`);
const ENTITIES_DIR = join(__dirname, "/../../entities/**/*.{ts,js}");

export const typeormConfig: TypeOrmModuleOptions = {
  type: "postgres",
  url: POSTGRES_URL,
  entities: [ENTITIES_DIR],
  migrations: [MIGRATION_DIR],
  synchronize: false,
  logging: false,
  dropSchema: false,
};
