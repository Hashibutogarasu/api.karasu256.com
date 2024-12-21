import { config } from "dotenv";

function loadEnv() {
  config({
    path: process.env.NODE_ENV === "production" ? undefined : `.env.${process.env.NODE_ENV}`,
  });
}

export { loadEnv };
