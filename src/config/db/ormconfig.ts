import { DataSource } from "typeorm";
import { config } from "dotenv";
import { join } from "path";
import { typeormConfig } from "./typeorm.config";

config({
  path: `.env.${process.env.NODE_ENV}`,
});

const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_PORT = process.env.DATABASE_PORT;
const DATABASE_DB = process.env.DATABASE_DB;

if (!DATABASE_HOST || !DATABASE_USER || !DATABASE_PASSWORD || !DATABASE_PORT || !DATABASE_DB) {
  throw new Error("Enviroment Database Error");
}

const source = new DataSource(typeormConfig as any);

source.initialize();

export default source;
