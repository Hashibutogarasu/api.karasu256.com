import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  code: z.string().optional(),
});

type SignInDto = z.infer<typeof signInSchema>;

const setUpMfaSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

type SetUpMfaDto = z.infer<typeof setUpMfaSchema>;

const enableMfaSchema = signInSchema.extend({
  deviceName: z.string().min(1),
  email: z.string().email(),
  code: z.string().min(1),
  answerChallenge: z.enum(['CUSTOM_CHALLENGE', 'MFA_SETUP', 'NEW_PASSWORD_REQUIRED', 'SELECT_MFA_TYPE', 'SMS_MFA', 'SOFTWARE_TOKEN_MFA']),
});

type EnableMfaDto = z.infer<typeof enableMfaSchema>;

const disableMfaSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  code: z.string().min(1),
});

type DisableMfaDto = z.infer<typeof disableMfaSchema>;


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
  email: z.string().email(),
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
  enableMfaSchema,
  signupSchema,
  signUpConfirmSchema,
  forgotPasswordSchema,
  forgotPasswordConfirmSchema,
  changePasswordSchema,
  getRefreshTokenSchema,
  refreshTokenSchema,
  setUpMfaSchema,
  disableMfaSchema,
  SignInDto,
  EnableMfaDto,
  SignupDto,
  SignUpConfirmDto,
  ForgotPasswordDto,
  ForgotPasswordConfirmDto,
  ChangePasswordDto,
  GetRefreshTokenDto,
  RefreshTokenDto,
  SetUpMfaDto,
  DisableMfaDto,
};