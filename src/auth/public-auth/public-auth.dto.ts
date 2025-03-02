import { User, UserCredential } from "firebase/auth";
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

const signInGoogleCallbackSchema = z.object({
  name: z.object({
    familyName: z.string(),
    givenName: z.string(),
  }),
  emails: z.array(z.object({
    value: z.string().email(),
    verified: z.boolean(),
  })),
  photos: z.array(z.string()),
  provider: z.string(),
  accessToken: z.string(),
  refreshToken: z.string(),
});

type SignInGoogleCallbackDto = z.infer<typeof signInGoogleCallbackSchema>;

const userSchema = z.object({
  uid: z.string(),
  email: z.string().email(),
  emailVerified: z.boolean(),
  displayName: z.string(),
  photoURL: z.string().url(),
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
    photoURL: z.string().url(),
    providerId: z.string(),
  })),
});

type UserRecord = z.infer<ZodType<User>>;

export {
  signInSchema,
  signUpSchema,
  accessTokenSchema,
  actionQueryParamSchema,
  actionQueryModeSchema,
  actionQueryoobCodeSchema,
  actionQueryApiKeySchema,
  actionQueryContinueUrlSchema,
  actionQueryLangSchema,
  signInGoogleCallbackSchema,
  userSchema,
  SignInDto,
  SignUpDto,
  AccessTokenDto,
  ActionQueryParamDto,
  SignInGoogleCallbackDto,
  UserRecord,
};