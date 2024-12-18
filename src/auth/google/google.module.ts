import { Module } from "@nestjs/common";
import { GoogleService } from "@/auth/google/google.service";
import { GoogleController } from "@/auth/google/google.controller";

@Module({
  imports: [],
  controllers: [GoogleController],
  providers: [GoogleService],
})
export class GoogleModule {}
