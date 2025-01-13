import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const SignInDtoSchema = z.object({
  email: z.string().default('{{email}}'),
  password: z.string().default('{{password}}'),
});

export class SignInDto extends createZodDto(SignInDtoSchema) { }

export const PasswordLessSignInDtoSchema = z.object({
  email: z.string(),
});

export class PasswordLessSignInDto extends createZodDto(PasswordLessSignInDtoSchema) { }

export const SignInOtpDtoSchema = z.object({
  hash: z.string(),
});

export class SignInOtpDto extends createZodDto(SignInOtpDtoSchema) { }

export const SignUpDtoSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export class SignUpDto extends createZodDto(SignUpDtoSchema) { }

export const AccessTokenDtoSchema = z.object({
  accessToken: z.string(),
});

export class AccessTokenDto extends createZodDto(AccessTokenDtoSchema) { }

export const SignInWithOtpDtoSchema = z.object({
  token: z.string(),
  message: z.string().optional(),
});

export class SignInWithOtpDto extends createZodDto(SignInWithOtpDtoSchema) { }

export const VerifyOtpDtoSchema = z.object({
  token_hash: z.string(),
  type: z.string(),
});

export class VerifyOtpDto extends createZodDto(VerifyOtpDtoSchema) { }
