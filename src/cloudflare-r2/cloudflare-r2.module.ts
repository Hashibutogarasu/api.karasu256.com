import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Module } from 'nestjs-s3';

@Module({
  imports: [
    S3Module.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        config: {
          endpoint: configService.get('S3_ENDPOINT'),
          accessKeyId: configService.get('CLOUDFLARE_ACCESS_KEY_ID'),
          secretAccessKey: configService.get('CLOUDFLARE_SECRET_ACCESS_KEY'),
          region: configService.get('CLOUDFLARE_REGION'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class CloudflareR2Module { }
