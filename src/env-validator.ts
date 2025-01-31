import { z } from 'zod';

const NODE_ENVS = z.enum(['development', 'production', 'local', 'test']);

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
  CLOUDFLARE_ACCESS_KEY_ID: z.string(),
  CLOUDFLARE_SECRET_ACCESS_KEY: z.string(),
  CLOUDFLARE_REGION: z.string(),
  S3_ENDPOINT: z.string(),
});

export function validate(
  config: Record<string, unknown>,
): Record<string, unknown> {
  envSchema.parse(config);
  return config;
}