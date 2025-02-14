import { Module } from '@nestjs/common';
import { CognitoAuthModule as AdminAuthModule } from '@nestjs-cognito/auth';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    AdminAuthModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        jwtVerifier: {
          userPoolId: configService.get("COGNITO_USER_POOL_ID") as string,
          clientId: configService.get("COGNITO_CLIENT_ID"),
          tokenUse: "access",
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class CognitoAuthModule { }
