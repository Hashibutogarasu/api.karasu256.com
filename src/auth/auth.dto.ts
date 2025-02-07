import { z } from "zod";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(1);

const codeSchema = z.string().min(6)

const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  code: codeSchema.optional(),
});

type SignInDto = z.infer<typeof signInSchema>;

const setUpMfaSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

type SetUpMfaDto = z.infer<typeof setUpMfaSchema>;

const enableMfaSchema = signInSchema.extend({
  deviceName: z.string().min(1),
  email: emailSchema,
  code: codeSchema,
  answerChallenge: z.enum(['CUSTOM_CHALLENGE', 'MFA_SETUP', 'NEW_PASSWORD_REQUIRED', 'SELECT_MFA_TYPE', 'SMS_MFA', 'SOFTWARE_TOKEN_MFA']),
});

type EnableMfaDto = z.infer<typeof enableMfaSchema>;

const disableMfaSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  code: codeSchema,
});

type DisableMfaDto = z.infer<typeof disableMfaSchema>;

const signupSchema = z.object({
  nickname: codeSchema,
  email: emailSchema,
  password: passwordSchema,
});

type SignupDto = z.infer<typeof signupSchema>;

const signUpConfirmSchema = z.object({
  email: emailSchema,
  code: codeSchema,
});

type SignUpConfirmDto = z.infer<typeof signUpConfirmSchema>;

const forgotPasswordSchema = z.object({
  email: emailSchema,
});

type ForgotPasswordDto = z.infer<typeof forgotPasswordSchema>;

const forgotPasswordConfirmSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  code: codeSchema.optional(),
});

type ForgotPasswordConfirmDto = z.infer<typeof forgotPasswordConfirmSchema>;

const changePasswordSchema = z.object({
  email: emailSchema,
  oldPassword: passwordSchema,
  newPassword: passwordSchema,
  code: codeSchema.optional(),
});

type ChangePasswordDto = z.infer<typeof changePasswordSchema>;

const getRefreshTokenSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

type GetRefreshTokenDto = z.infer<typeof getRefreshTokenSchema>;

const refreshTokenSchema = z.object({
  email: emailSchema,
  refreshToken: passwordSchema,
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