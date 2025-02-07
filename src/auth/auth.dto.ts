import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

type SignInDto = z.infer<typeof signInSchema>;

const enableMfaSchema = signInSchema.extend({
  deviceName: z.string().min(1),
  email: z.string().email(),
  code: z.string().min(1),
});

type EnableMfaDto = z.infer<typeof enableMfaSchema>;

const signInWithMfaSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  code: z.string().min(1),
});

type SignInWithMfaDto = z.infer<typeof signInWithMfaSchema>;

const signInOtpSchema = z.object({
  email: z.string().email(),
  otp: z.string().min(1),
});

type SignInOtpDto = z.infer<typeof signInOtpSchema>;

const signupSchema = z.object({
  nickname: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(1),
});

type SignupDto = z.infer<typeof signupSchema>;

const signUpConfirmSchema = z.object({
  email: z.string().email(),
  code: z.string().min(1),
});

type SignUpConfirmDto = z.infer<typeof signUpConfirmSchema>;

const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

type ForgotPasswordDto = z.infer<typeof forgotPasswordSchema>;

const forgotPasswordConfirmSchema = z.object({
  email: z.string().email(),
  code: z.string().min(1),
  password: z.string().min(1),
});

type ForgotPasswordConfirmDto = z.infer<typeof forgotPasswordConfirmSchema>;

const changePasswordSchema = z.object({
  oldPassword: z.string().min(1),
  newPassword: z.string().min(1),
});

type ChangePasswordDto = z.infer<typeof changePasswordSchema>;

const getRefreshTokenSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

type GetRefreshTokenDto = z.infer<typeof getRefreshTokenSchema>;

const refreshTokenSchema = z.object({
  email: z.string().email(),
  refreshToken: z.string().min(1),
});

type RefreshTokenDto = z.infer<typeof refreshTokenSchema>;

export {
  signInSchema,
  signInWithMfaSchema,
  signInOtpSchema,
  enableMfaSchema,
  signupSchema,
  signUpConfirmSchema,
  forgotPasswordSchema,
  forgotPasswordConfirmSchema,
  changePasswordSchema,
  getRefreshTokenSchema,
  refreshTokenSchema,
  SignInDto,
  SignInWithMfaDto,
  SignInOtpDto,
  EnableMfaDto,
  SignupDto,
  SignUpConfirmDto,
  ForgotPasswordDto,
  ForgotPasswordConfirmDto,
  ChangePasswordDto,
  GetRefreshTokenDto,
  RefreshTokenDto,
};