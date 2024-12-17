import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { config } from "dotenv";
import { join } from "path";

config({
  path: `.env.${process.env.NODE_ENV}`,
});

export const typeormConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  database: process.env.DATABASE_DB,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  entities: [join(__dirname, "../../**/*.entity{.ts,.js}")],
  migrations: ["src/db/migrations/**/*.ts"],
  synchronize: false,
  logging: false,
  dropSchema: false,
};
