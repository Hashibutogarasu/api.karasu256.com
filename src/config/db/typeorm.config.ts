import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { loadEnv } from "@/utils/dotenv";
import { join } from "path";

loadEnv();

const DATABASE_URL = process.env.NODE_ENV === "local" ? process.env.SUPABASE_POSTGRES_URL : process.env.POSTGRES_URL;

if (!DATABASE_URL) {
  throw new Error("Enviroment Database Error");
}

const MIGRATION_DIR = join(__dirname, `/../../config/db/migrations/${process.env.NODE_ENV}/**/*.{ts,js}`);
const ENTITIES_DIR = join(__dirname, "/../../entities/**/*.{ts,js}");

console.log("MIGRATION_DIR", MIGRATION_DIR);

export const typeormConfig: TypeOrmModuleOptions = {
  type: "postgres",
  url: DATABASE_URL,
  entities: [ENTITIES_DIR],
  migrations: [MIGRATION_DIR],
  synchronize: false,
  logging: false,
  dropSchema: false,
};
