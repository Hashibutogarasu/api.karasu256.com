import { UserCredential } from "firebase/auth";
import { z, ZodType } from "zod";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInDto = z.infer<typeof signInSchema>;

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  displayName: z.string(),
});

type SignUpDto = z.infer<typeof signUpSchema>;

const accessTokenSchema = z.object({
  token: z.string(),
});

type AccessTokenDto = z.infer<typeof accessTokenSchema>;

const userRecordSchema = z.object({
  uid: z.string(),
  email: z.string().email(),
  emailVerified: z.boolean(),
  displayName: z.string(),
  photoURL: z.string(),
  disabled: z.boolean(),
  metadata: z.object({
    lastSignInTime: z.string(),
    creationTime: z.string(),
    lastRefreshTime: z.string(),
  }),
  tokensValidAfterTime: z.string(),
  providerData: z.array(z.object({
    uid: z.string(),
    displayName: z.string(),
    email: z.string().email(),
    photoURL: z.string(),
    providerId: z.string(),
  })),
});

type UserRecordDto = z.infer<typeof userRecordSchema>;

const actionQueryModeSchema = z.enum(["resetPassword", "recoverEmail", "verifyEmail"]);

const actionQueryoobCodeSchema = z.string();

const actionQueryApiKeySchema = z.string();

const actionQueryContinueUrlSchema = z.string().url();

const actionQueryLangSchema = z.string().default("en");

const actionQueryParamSchema = z.object({
  mode: actionQueryModeSchema,
  oobCode: actionQueryoobCodeSchema,
  apiKey: actionQueryApiKeySchema,
  continueUrl: actionQueryContinueUrlSchema,
  lang: actionQueryLangSchema,
});

type ActionQueryParamDto = z.infer<typeof actionQueryParamSchema>;

export {
  signInSchema,
  signUpSchema,
  accessTokenSchema,
  userRecordSchema,
  actionQueryParamSchema,
  actionQueryModeSchema,
  actionQueryoobCodeSchema,
  actionQueryApiKeySchema,
  actionQueryContinueUrlSchema,
  actionQueryLangSchema,
  SignInDto,
  SignUpDto,
  AccessTokenDto,
  UserRecordDto,
  ActionQueryParamDto,
};