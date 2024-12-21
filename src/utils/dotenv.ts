import { config } from "dotenv";

function loadEnv() {
  config({
    path: process.env.NODE_ENV === "production" ? '.env.production' : `.env.${process.env.NODE_ENV}`,
  });
}

export { loadEnv };
