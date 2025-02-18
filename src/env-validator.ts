import { z } from 'zod';

const NODE_ENVS = z.enum(['development', 'production', 'local', 'preview']);

const envSchema = z.object({
  NODE_ENV: NODE_ENVS,
  POSTGRES_DATABASE: z.string(),
  POSTGRES_HOST: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_PRISMA_URL: z.string(),
  POSTGRES_URL: z.string(),
  POSTGRES_URL_NON_POOLING: z.string(),
  POSTGRES_URL_NO_SSL: z.string(),
  POSTGRES_USER: z.string(),
  COGNITO_USER_POOL_ID: z.string(),
  COGNITO_CLIENT_ID: z.string(),
  COGNITO_REGION: z.string(),
  CLOUDFLARE_SESSION_TOKEN: z.string(),
  CLOUDFLARE_ACCESS_KEY_ID: z.string(),
  CLOUDFLARE_SECRET_ACCESS_KEY: z.string(),
  CLOUDFLARE_REGION: z.string(),
  CLOUDFLARE_BUCKET: z.string(),
  CLOUDFLARE_PUBLIC_URL: z.string(),
  FIREBASE_API_KEY: z.string(),
  FIREBASE_AUTH_DOMAIN: z.string(),
  FIREBASE_DATABASE_URL: z.string(),
  FIREBASE_PROJECT_ID: z.string(),
  FIREBASE_STORAGE_BUCKET: z.string(),
  FIREBASE_MESSAGING_SENDER_ID: z.string(),
  FIREBASE_APP_ID: z.string(),
  FIREBASE_MEASUREMENT_ID: z.string(),
  ACCOUNT_FRONT_URL: z.string(),
});

export function validate(
  config: Record<string, unknown>,
): Record<string, unknown> {
  envSchema.parse(config);
  return config;
}