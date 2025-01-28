import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const MIGRATION_DIR = join(__dirname, `/../../config/db/migrations/${process.env.NODE_ENV}/**/*.{ts,js}`);
        const ENTITIES_DIR = join(__dirname, "/../entities/**/*.{ts,js}");

        return {
          type: "postgres",
          url: configService.get("POSTGRES_URL"),
          entities: [ENTITIES_DIR],
          migrations: [MIGRATION_DIR],
          synchronize: false,
          logging: false,
          dropSchema: false,
        };
      },
      inject: [ConfigService],
    }),
  ]
})
export class TypeormConnectionModule { }
