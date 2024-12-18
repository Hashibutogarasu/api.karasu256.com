import { config } from "dotenv";

function loadEnv() {
  if (process.env.NODE_ENV === "production") {
    config();
  } else {
    config({
      path: `.env.${process.env.NODE_ENV}`,
    });
  }
}

export { loadEnv };
