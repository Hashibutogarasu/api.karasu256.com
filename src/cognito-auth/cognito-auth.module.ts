import { Module } from '@nestjs/common';
import { CognitoAuthModule as AuthModule } from '@nestjs-cognito/auth';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    AuthModule.registerAsync({
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
